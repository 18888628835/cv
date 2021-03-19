import React from "react";
import styled from "styled-components";

import Header from "../components/header/Header";

import Main from "../components/main/Main";

const Wrapper = styled.main`
  margin-top: 40px;
`;

export const Index = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
};
