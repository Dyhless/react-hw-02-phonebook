import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  background-color: #f4f4f4;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
