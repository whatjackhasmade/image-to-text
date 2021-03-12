import styled from 'styled-components';

const width = `2px`;

const loaderPosition = props => {
  if (!props || props.fixed === true) return `fixed`;
  return `absolute`;
};

export const StyledLoader = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 32px;
  position: ${props => loaderPosition(props)};
  top: 0;
  width: 100%;
  z-index: 100;

  pointer-events: none;
`;

export const StyledDefault = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100px;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .loader__vector {
    bottom: 0;
    height: 100%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;

    transform-origin: center center;

    animation: rotate 2s linear infinite;
  }

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    stroke-width: ${width};

    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes color {
    100%,
    0% {
      stroke: var(--primary);
    }
    40% {
      stroke: var(--secondary);
    }
    66% {
      stroke: var(--primary);
    }
    80%,
    90% {
      stroke: var(--secondary);
    }
  }
`;

export default StyledLoader;
