import styled from "@emotion/styled";
import { Field, Form } from "formik";

export const OptionStyle = styled.option`
  font-size: 16px;
  font-weight: 500;
  color: rgba(18, 20, 23, 0.2);
  background-color: rgba(255, 255, 255, 1);
  top: 0;
  margin: 0;
  border: none;
  height: 272px;
  border-radius: 14px;
`;
export const FieldStyle = styled(Field)`
  background-color: rgba(247, 247, 251, 1);
  color: rgba(18, 20, 23, 1);
  padding: 14px 18px 14px 18px;
  border-radius: 14px;
  cursor: pointer;
  border: none;
  font-size: 18px;
  font-weight: 500;
  overflow-y: scroll;
  width: 224px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 90px;

    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 8px;
    height: 90px;
    background: rgba(18, 20, 23, 0.05);
    border-radius: 10px;
  }
`;
export const FormStyle = styled(Form)``;

export const Button = styled.button`
  background-color: rgba(52, 112, 255, 1);
  color: rgba(255, 255, 255, 1);
  padding: 14px 44px 14px 44px;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  font-size: 18px;
  font-weight: 500;
  margin-left: 18px;
`;
