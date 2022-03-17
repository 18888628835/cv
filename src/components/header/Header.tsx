/*
 * @Author: 邱彦兮
 * @Date: 2021-02-06 12:49:26
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-03-17 00:46:21
 * @FilePath: /cv/src/components/header/Header.tsx
 */
import React from 'react';
import styled from 'styled-components';
import Avatar from './avatar/Avatar';
import Name from './name/Name';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  .avatar {
    position: relative;
    height: 85px;
    width: 85px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 140px;
    > img {
      position: absolute;
      top: -25px;
      left: 5px;
      transform: scale(1.1);
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
      {/* <Avatar /> */}
      <Name />
    </Wrapper>
  );
};

export default Header;
