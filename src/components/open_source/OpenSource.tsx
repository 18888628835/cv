import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  a {
    text-decoration: underline;
  }
  .source-list {
    margin-bottom: 30px;
  }
  .symbol {
    margin: 0 5px;
  }
  span {
    font-size: 13px;
    color: #787878;
    margin-bottom: 5px;
  }
`;

const OpenSource = () => {
  return (
    <Wrapper>
      <h2>开源项目</h2>
      <div className="source-list">
        <h3>CSS3-animation</h3>
        <div>
          <span>
            <a href="">会动的皮卡丘</a>
          </span>
          <span className="symbol">|</span>
          <span>
            <a href="">奔跑的大熊</a>
          </span>
          <span className="symbol">|</span>
          <span>
            <a href="">太极图</a>
          </span>
        </div>
      </div>
      <div className="source-list">
        <h3>navigator</h3>
        <p>一个简洁的网站导航，使用原生JS书写，支持键盘事件新增、打开网页等</p>
        <div>
          <span>
            <a href="">简介图</a>
          </span>
          <span className="symbol">|</span>
          <span>
            <a href="">预览地址</a>
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default OpenSource;
