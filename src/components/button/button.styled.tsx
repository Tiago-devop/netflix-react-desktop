import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 9px;
  margin: 0 0 22px;
  border-radius: 5px;
  background: ${(props) => props.theme.palette.core.primary};
  color: ${(props) => props.theme.palette.typography.primary};
  border: 0;
`;
