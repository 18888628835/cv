import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  &.link-wrap {
    margin-bottom: 52px;
    .links {
      margin-bottom: 15px;
    }
  }
`;
const Links = () => {
  return (
    <Wrapper className="link-wrap">
      <h2>鏈接</h2>
      <h4 className="links">
        <a href="https://juejin.cn/user/3940246036424679/posts">
          个人博客-累计文章100+
        </a>
      </h4>
      <h4>
        <a href="https://github.com/18888628835">GitHub-近半年提交250+</a>
      </h4>
    </Wrapper>
  );
};

export default Links;
