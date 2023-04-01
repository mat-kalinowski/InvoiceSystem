import styled from "styled-components";
import { COLORS } from "../Colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.lightGrey};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;
