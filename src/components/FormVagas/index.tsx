import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);

  input, select, button {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }

  button {
    background: #0d6efd;
    color: white;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #0b5ed7;
    }
  }
`;

