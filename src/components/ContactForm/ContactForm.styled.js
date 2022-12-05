import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const Label = styled.label`
  margin: 10px auto;
  min-width: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: relative;
  font-size: 18px;
  font-family: 'Roboto Serif', serif;
  font-weight: 400;
`;

export const FormInput = styled(Field)`
  font: inherit;
  letter-spacing: inherit;
  color: black;
  outline: none;
  border: none;
  border: 1px solid #dad2bc;
  height: 50px;
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

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  border: 0;
  margin: 0 auto;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
  font-family: 'Roboto Serif', serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  max-width: 200px;
  width: 100%;
  padding: 6px 16px;
  border-radius: 4px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: black;
  background-color: #59cd90;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

  &:hover,
  &:focus {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;

export const ErrorText = styled.p`
  font-size: 18px;
  color: #f95738;
  text-transform: uppercase;
  margin: 0;
`;
