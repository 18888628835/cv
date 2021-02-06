import React from "react";
import styled from "styled-components";
import { detailData } from "../../mock";
const Wrapper = styled.section`
  /* 详情 */
  &.detail-wrap {
    margin-bottom: 52px;
    .detail {
      h4 {
        margin-bottom: 10px;
      }
    }
    li {
      margin-bottom: 20px;
    }
  }
`;
const Detail = () => {
  return (
    <Wrapper className="detail-wrap">
      <h2>詳情</h2>
      <ul>
        {detailData.map(({ title, message }) => {
          return (
            <li key={title} className="detail">
              <h4>{title}</h4>
              <p>{message}</p>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Detail;
