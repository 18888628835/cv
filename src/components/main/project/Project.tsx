import React from 'react';
import styled from 'styled-components';
import { projectData } from '../../../store/mock';
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
  .address {
    color: #0092c6;
  }
  ul p::before {
    content: '⋅';
    display: inline-block;
    margin-right: 5px;
  }
  ul p {
    padding-left: 21px;
    margin-bottom: 3px;
  }
`;
const Project = () => {
  return (
    <Wrapper>
      <h2>个人项目</h2>
      {projectData.map(item => {
        return (
          <section key={item.title}>
            <h3>{item.title}</h3>
            <div className='description'>
              <p>{item.description}</p>
              <ul>
                {item.gains.map(label => (
                  <ol key={label}>
                    <p>{label}</p>
                  </ol>
                ))}
              </ul>
              <p>{item.skill}</p>
              <p>
                <a
                  className='address'
                  href={item.link1}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {item.content1}
                </a>
                {(item.content1 || item.content2) && <span>|</span>}
                <a
                  className='address'
                  href={item.link2}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {item.content2}
                </a>
              </p>
            </div>
          </section>
        );
      })}
    </Wrapper>
  );
};

export default Project;
