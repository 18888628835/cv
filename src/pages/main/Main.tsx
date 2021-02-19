import Project from "../../components/project/Project";
import React from "react";
import styled from "styled-components";
import Links from "../../components/link/Link";
import Skill from "../../components/skill/Skill";
import Aside from "../../components/layout/Aside";
import Detail from "../../components/detail/Detail";
import Experience from "../../components/layout/Experience";
import WorkExperience from "../../components/experience/WorkExperience";
import OpenSource from "../../components/open_source/OpenSource";
import AboutMe from "../../components/aboutme/AboutMe";

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
        <Project />
        <WorkExperience />
        <OpenSource />
      </Experience>
    </Wrapper>
  );
};

export default Main;
