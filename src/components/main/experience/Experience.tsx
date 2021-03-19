import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  flex: 1;
`;

const Experience = (props: any) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Experience;
