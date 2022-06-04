import styled, { css } from "styled-components";

export const Button = styled.button`
  ${(props) => {
    const {
      theme: { palette, layout },
    } = props;
    const { core, typography } = palette;
    return css`
      width: 100%;
      color: ${typography.primary};
      padding: 9px;
      margin: 0 0 22px;
      border-radius: ${layout.border.medium};
      background: ${core.primary};
      border: 0;
    `;
  }};
`;
