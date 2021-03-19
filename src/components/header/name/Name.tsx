import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  p {
    font-size: 15px;
    color: #5c5c5c;
    margin-bottom: 0;
  }
`;
const Name = () => {
  return (
    <Wrapper>
      <h1>邱 彦兮</h1>
      <p>前端开发工程师</p>
    </Wrapper>
  );
};

export default Name;
