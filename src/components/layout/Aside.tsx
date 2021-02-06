import React from "react";
import styled from "styled-components";

const Wrapper = styled.aside`
  min-width: 224px;
`;
const Aside = (props: any) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Aside;
