/*
 * @Author: 邱彦兮
 * @Date: 2021-02-06 13:13:54
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-17 00:51:13
 * @FilePath: /cv/src/components/main/Main.tsx
 */
import Project from './project/Project';
import React from 'react';
import styled from 'styled-components';
import Links from './link/Link';
import Skill from './skill/Skill';
import Aside from './aside/Aside';
import Detail from './detail/Detail';
import Experience from './experience/Experience';
import WorkExperience from './work_experience/WorkExperience';
import OpenSource from './open_source/OpenSource';
import AboutMe from './aboutme/AboutMe';
import Header from '../header/Header';
const Wrapper = styled.main`
  display: flex;
`;
const Main = () => {
  return (
    <Wrapper>
      <Aside>
        <Detail />
        <Links />
        <Skill />
        <AboutMe />
      </Aside>
      <Experience>
        <Header />
        <WorkExperience />
        <Project />
        <OpenSource />
      </Experience>
    </Wrapper>
  );
};

export default Main;
