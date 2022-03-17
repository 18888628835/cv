/*
 * @Author: 邱彦兮
 * @Date: 2021-02-06 12:39:04
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-16 22:01:05
 * @FilePath: /cv/src/components/main/skill/Skill.tsx
 */
import React from 'react';
import styled from 'styled-components';
import { Progress } from 'antd';
import { skillsData } from '../../../store/mock';
const Wrapper = styled.section`
  &.skills {
    margin-bottom: 52px;
    .circle-wrap {
      display: flex;
      margin: 6px 0 20px;
    }
    .circle {
      border-radius: 50%;
      margin-right: 8px;
      height: 9px;
      width: 9px;
      background-color: #e4e4e4;
      display: inline-block;
    }
    .skill {
      padding-right: 70px;
    }
  }
`;

const Skill = () => {
  return (
    <Wrapper className='skills'>
      <h2>技术栈</h2>
      {skillsData.map(({ skillName, percent }) => {
        return (
          <div className='skill' key={skillName}>
            <h4>{skillName}</h4>
            <Progress
              showInfo={false}
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={percent}
            />
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Skill;
