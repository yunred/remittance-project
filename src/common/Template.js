/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

function Template({ children }) {
  return <TemplateBlock>{children}</TemplateBlock>;
}
const TemplateBlock = styled.div`
  position: relative;
  width: 375px;
  background: #ffffff;

  margin: 0 auto;
`;

export default Template;
