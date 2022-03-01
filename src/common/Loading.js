import styled, { keyframes } from 'styled-components';

function Loading() {
  return (
    <LoadingDiv>
      <LoadingCircle />
    </LoadingDiv>
  );
}

const rotation = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;
const LoadingDiv = styled.div`
  margin-top: 50px;
  margin-left: calc(50% - 20px);
  color: #939fa5;
  line-height: 100px;
  border: none;
`;
const LoadingCircle = styled.div`
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 10px solid #c2c2c2;
  border-top: 10px solid black;
  border-radius: 50em;
  animation: ${rotation} 0.2s linear infinite;
  animation-duration: 0.8s;
`;

export default Loading;
