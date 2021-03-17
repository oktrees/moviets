import React, { useState } from "react";
import styled from 'styled-components';

interface Props {
  searchDispatch: any;
}

const Input: React.FC<Props> = ({ searchDispatch }) => {
  const [searchParam, setSearchParam] = useState("");

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchDispatch(searchParam);
  }
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(e.target.value);
  }

  return (
    <Container onSubmit={onSubmitForm}>   
      <input type="text" onChange={onChangeInput} value={searchParam} placeholder="검색어를 입력해주세요..."/>
    </Container>
  )
}

const Container = styled.form`
  input {
    color: #eee;
    border-color: #222;
    width: 300px;
    height: 50px;
    font-size: 26px;
    margin-top: 10px; 
    background-color: #222;
  }
  input::placeholder {
    color: #eee;
  }
  @media screen and (max-width: 480px) {
    margin-left: 5vw;
  }  
`

export default Input;