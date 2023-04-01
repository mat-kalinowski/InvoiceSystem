import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { getUsers } from "../../api/repositories/user";
import EditionButtons from "../../common/components/EditionButtons/EditionButtons";
import Loading from "../../common/components/loading/Loading";
import MessageQueue, {
  useMessageQueue,
} from "../../common/components/messageQueue";
import { Wrapper } from "../../common/styles/wrappers";
import UserAction from "./UserAction";

const CustomWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: calc(100vh - 62px);
`;
const USERS_COLUMNS = [
  { id: "no", label: "No.", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "surname", label: "Surname", minWidth: 100, align: "right" },
  {
    id: "role",
    label: "role",
    minWidth: 170,
    align: "right",
  },
];

const UserList = () => {
  const [user, setUser] = useState(null);

  const { isLoading, data, error, refetch } = useQuery(["users"], getUsers);
  const { addMessage, messages } = useMessageQueue();

  const USERS_ROWS = useMemo(
    () => data?.map((user, i) => [i, user.name, user.surname, user.role]) || [],
    [data]
  );

  useEffect(() => {
    if (error) {
      addMessage(error.message, "error", 2000);
    }
  }, [error]);

  return (
    <>
      {isLoading && <Loading />}
      <CustomWrapper>
        <MessageQueue messages={messages} />
        <EditionButtons path={"/dashboard"} handleAddElement={setUser} />
        {/* {data && <CustomTable cols={USERS_COLUMNS} rows={USERS_ROWS} />} */}
        {user && (
          <UserAction
            user={user}
            setShow={setUser}
            addMessage={addMessage}
            refetch={refetch}
          />
        )}
      </CustomWrapper>
    </>
  );
};

export default UserList;
