/*
 * @Author: 邱彦兮
 * @Date: 2021-02-06 14:33:22
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-18 23:05:11
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
    ol {
      list-style: disc;
      margin-left: 25px;
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
            <ol>
              {item.gains.map(i => {
                return (
                  <li key={i}>
                    <p>{i}</p>
                  </li>
                );
              })}
            </ol>
            <p>{item.title2}</p>
            <ol>
              {item.result.map(i => {
                return (
                  <li key={i}>
                    <p>{i}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default WorkExperience;
