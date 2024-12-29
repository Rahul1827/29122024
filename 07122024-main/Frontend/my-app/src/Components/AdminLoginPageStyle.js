import styled from "styled-components";

export const Container = styled.div`
  background-color: #4CAF50; /* Green background for the container */
  border-radius: 15px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 400px;
  height: 400px; /* Fixed height */
  margin: auto; /* Centers the container horizontally */
`;

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Form = styled.form`
  background-color: #ffffff; /* White background for the form */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 40px;
  text-align: center;
  width: 90%; /* Adjust width for responsiveness */
  max-width: 350px;
`;

export const Title = styled.h1`
  font-weight: bold;
  color: #4CAF50; /* Green title */
  margin-bottom: 20px;
`;

export const Input = styled.input`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: none;
  background-color: #4CAF50;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 12px 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 80ms ease-in;
  margin-top: 15px;

  &:hover {
    background-color: #388E3C; /* Slightly darker green on hover */
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

export const Anchor = styled.a`
  color: #388E3C;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  &:hover {
    text-decoration: underline;
  }
`;
