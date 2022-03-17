/*
 * @Author: 邱彦兮
 * @Date: 2021-02-06 14:33:22
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-17 00:04:40
 * @FilePath: /cv/src/components/main/work_experience/WorkExperience.tsx
 */
import React from 'react';
import styled from 'styled-components';
import { ExperienceData } from '../../../store/mock';
const Wrapper = styled.section`
  > div {
    margin-bottom: 35px;
    h3 {
      margin-bottom: 11px;
    }
    h4 {
      margin-bottom: 10px;
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
  }
`;
const WorkExperience = () => {
  return (
    <Wrapper>
      <h2>项目经历</h2>
      {ExperienceData.map(item => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <h4>{item.date}</h4>
            <p>{item.project}</p>
            <p>{item.Introduction}</p>
            <p>{item.work}</p>
            <p>{item.workContent}</p>
            <p>{item.title1}</p>
            <ul>
              {item.gains.map(i => {
                return (
                  <li key={i}>
                    <p>{i}</p>
                  </li>
                );
              })}
            </ul>
            <p>{item.title2}</p>
            <ul>
              {item.result.map(i => {
                return (
                  <li key={i}>
                    <p>{i}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default WorkExperience;
