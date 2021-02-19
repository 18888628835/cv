import React from "react";
import styled from "styled-components";
import { projectData } from "../../mock";
const Wrapper = styled.section`
  h2 {
    margin-bottom: 15px;
  }
  .description {
    margin-bottom: 18px;
  }
  span {
    margin: 0 5px;
  }
`;
const Project = () => {
  return (
    <Wrapper>
      <h2>项目经历</h2>
      {projectData.map((item) => {
        return (
          <section key={item.title}>
            <h3>{item.title}</h3>
            <div className="description">
              <p>{item.description}</p>
              <p>{item.skill}</p>
              <p>
                <a href={item.link1}> {item.content1}</a>
                <span>|</span>
                <a href={item.link2}>{item.content2}</a>{" "}
              </p>
            </div>
          </section>
        );
      })}
    </Wrapper>
  );
};

export default Project;
