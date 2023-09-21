import React from "react";
import { Button } from "react-scroll";
import { styled } from "styled-components";

interface ibutton {
  text: string;
}

const GlobalButton: React.FC<ibutton> = ({ text }) => {
  return (
    <div>
      <Btn text={text}>{text}</Btn>
    </div>
  );
};

export default GlobalButton;

const Btn = styled.button<{
  text: string;
}>`
  padding: 15px 19px;
  border-radius: 40px;
  color: white;
  font-size: 20px;
  border: none;
  opacity: 0.9;
  background-color: gray;
  margin-right: 20px;

  &:hover {
    color: red;
  }
`;
