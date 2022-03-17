/*
 * @Author: 邱彦兮
 * @Date: 2021-02-05 23:16:11
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-17 00:51:57
 * @FilePath: /cv/src/pages/index.tsx
 */
import React from 'react';
import styled from 'styled-components';

import Main from '../components/main/Main';

const Wrapper = styled.main`
  margin-top: 40px;
`;

export const Index = () => {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
};
