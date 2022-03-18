/*
 * @Author: 邱彦兮
 * @Date: 2021-02-06 13:30:25
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-18 23:06:31
 * @FilePath: /cv/src/components/main/project/Project.tsx
 */
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
  ol {
    list-style: disc;
    margin-left: 25px;
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
              <ol>
                {item.gains.map(label => (
                  <li key={label}>
                    <p>{label}</p>
                  </li>
                ))}
              </ol>
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
