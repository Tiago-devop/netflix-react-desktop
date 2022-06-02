import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 0 0 22px;
  border-radius: ${props => props.theme.palette.borders.corners};
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
`;