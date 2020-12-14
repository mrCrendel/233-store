import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const InviteInput = () => {
  const onSearch = () => console.log('search');

  return <Search placeholder="" onSearch={onSearch} enterButton="Search" size="large" />;
};

export default InviteInput;
