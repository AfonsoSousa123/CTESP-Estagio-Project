import React from 'react'
import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export default function Predefine() {
  return (
    <Content>
      <div>
        Predefine
      </div>
    </Content>
  )
}
