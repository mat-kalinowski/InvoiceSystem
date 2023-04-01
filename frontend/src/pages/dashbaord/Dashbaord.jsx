import React from "react";
import store from "../../api/store";
import { Wrapper } from "../../common/styles/wrappers";
import GroupIcon from "@mui/icons-material/Group";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import styled from "styled-components";
import { COLORS } from "../../common/Colors";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
  gap: 20px;

  :hover {
    transform: scale(1.1);
  }
`;

const WrapperDashbaord = styled(Wrapper)`
  gap: 50px;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  color: ${COLORS.blue};
`;

const DASHBAORD_ELEMENTS = [
  {
    name: "Users",
    path: "user-list",
    icon: <GroupIcon color="primary" fontSize="large" />,
    access: ["ADMIN"],
  },
  {
    name: "Dictionary",
    path: "dictionary",
    icon: <ImportContactsIcon color="primary" fontSize="large" />,
    access: ["ADMIN"],
  },
];

const Dashbaord = () => {
  const navigate = useNavigate();
  const user = store.getUser();

  return (
    <WrapperDashbaord>
      {DASHBAORD_ELEMENTS.map((element) => (
        <Card key={element.name} onClick={() => navigate(element.path)}>
          {element.icon}
          <Title>{element.name}</Title>
        </Card>
      ))}
    </WrapperDashbaord>
  );
};

export default Dashbaord;
