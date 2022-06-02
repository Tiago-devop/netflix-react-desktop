import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 9px;
  margin: 0 0 22px;
  border-radius: ${(props) => props.theme.palette.borders.corners};
  background: ${(props) => props.theme.palette.core.primary};
  color: ${(props) => props.theme.palette.typography.primary};
  border: 0;
  ${(props: any) =>
    !!props.blackFriday &&
    css`
      background: ${(props) => props.theme.blackFriday.core.primary};
      color: #fff;
      border: 1px solid #fff;
      padding: 8px;
      font-weight: ${(props) => props.theme.blackFriday.typography.font};
    `}
`;
