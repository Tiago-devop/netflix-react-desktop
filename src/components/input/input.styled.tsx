import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 0 0 22px;
  box-sizing: border-box;
  border-radius: ${(props) => props.theme.layout.border.medium};

  border: ${(props) => {
    const {
      theme: { layout, palette },
    } = props;
    return `${layout.border.small} solid ${palette.border.default}`;
  }};
`;
