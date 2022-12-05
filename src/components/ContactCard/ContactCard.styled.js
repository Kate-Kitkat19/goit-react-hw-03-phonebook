import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`;

export const Wrapper = styled.div`
  margin-right: 30px;
  display: flex;
  gap: 10px;
`;

export const Text = styled.span`
  font-size: 20px;
  font-family: 'Crimson Text', serif;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  border: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  font-family: 'Roboto Serif', serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.75;
  letter-spacing: 0.03;
  max-width: 200px;
  width: 100%;
  padding: 6px 8px;
  border-radius: 4px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: black;
  background-color: #f79d84;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

  &:hover,
  &:focus {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;
