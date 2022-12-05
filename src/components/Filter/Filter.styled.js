import styled from 'styled-components';

export const StyledFilter = styled.input`
  font: inherit;
  letter-spacing: inherit;
  color: black;
  outline: none;
  border: none;
  border: 1px solid #dad2bc;
  height: 50px;
  margin: 10px;
  max-width: 400px;
  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
  padding: 16.5px 14px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover,
  &:focus {
    border: 1px solid #7c0b2b;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }
`;

export const StyledLabel = styled.label`
  margin: 0 auto;
  min-width: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  font-family: 'Roboto Serif', serif;
  font-weight: 400;
`;
