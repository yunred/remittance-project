/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const TemplateBlock = styled.div`
  position: relative;
  width: 375px;
  height: 667px;

  background: #ffffff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 96px;
`;

function Template({ children }) {
  return <TemplateBlock>{children}</TemplateBlock>;
}

export default Template;
