import React from "react";
import styled from "styled-components";
import avatar from "../../static/avatar.png";

const Wrapper = styled.section`
  &.avatar {
    position: relative;
    height: 85px;
    width: 85px;
    border-radius: 50%;
    overflow: hidden;
    > img {
      position: absolute;
      top: -25px;
      left: 5px;
      transform: scale(1.1);
    }
  }
`;
const Avatar = () => {
  return (
    <Wrapper className="avatar">
      <img src={avatar} alt="" />
    </Wrapper>
  );
};

export default Avatar;
