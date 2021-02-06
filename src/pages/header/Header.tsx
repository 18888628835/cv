import React from "react";
import styled from "styled-components";
import Avatar from "../../components/header/Avatar";
import Name from "../../components/header/Name";

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
      <Avatar />
      <Name />
    </Wrapper>
  );
};

export default Header;
