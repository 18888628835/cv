import React from "react";
import styled from "styled-components";
import { openSourceData } from "../../mock";
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
  .symbol:last-child {
    display: none;
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
      {openSourceData.map((item) => {
        return (
          <div className="source-list">
            <h3>{item.name}</h3>
            <p>{item.describe}</p>
            <div className="source-item">
              {item.list.map((i) => {
                return (
                  <>
                    <span>
                      <a href={i.link}>{i.name}</a>
                    </span>
                    <span className="symbol">|</span>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default OpenSource;
