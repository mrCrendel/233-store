import React from 'react';
import { Input as AntInput } from 'antd';

const { Search } = AntInput;

const Input = ({ label, id, ...props }) => (
  <div className="ant-input">
    {!!label && <label htmlFor={id}>{label}</label> }
    <AntInput {...props} id={id} />
  </div>
);

export default Input;
