import Project from "./project/Project";
import React from "react";
import styled from "styled-components";
import Links from "./link/Link";
import Skill from "./skill/Skill";
import Aside from "./aside/Aside";
import Detail from "./detail/Detail";
import Experience from "./experience/Experience";
import WorkExperience from "./work_experience/WorkExperience";
import OpenSource from "./open_source/OpenSource";
import AboutMe from "./aboutme/AboutMe";

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
        <WorkExperience />
        <Project />
        <OpenSource />
      </Experience>
    </Wrapper>
  );
};

export default Main;
