import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding-right: 70px;
  p {
    white-space: space wrap;
  }
`;
const AboutMe = () => {
  return (
    <Wrapper>
      <h2>致謝</h2>
      <h3>感谢您抽出时间阅读我的简历,希望有一天能和您共事。</h3>
    </Wrapper>
  );
};

export default AboutMe;
