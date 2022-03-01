/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

function Template({ children }) {
  return <TemplateBlock>{children}</TemplateBlock>;
}
const TemplateBlock = styled.div`
  position: relative;
  max-width: 460px;
  background: #ffffff;

  margin: 0 auto;
`;

export default Template;
