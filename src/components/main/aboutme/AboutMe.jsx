/*
 * @Author: 邱彦兮
 * @Date: 2021-02-15 20:54:24
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-16 22:01:58
 * @FilePath: /cv/src/components/main/aboutme/AboutMe.jsx
 */
import React from 'react';
import styled from 'styled-components';

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
      <h3>感谢您抽出时间阅读我的简历。</h3>
    </Wrapper>
  );
};

export default AboutMe;
