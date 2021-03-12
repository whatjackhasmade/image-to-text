import styled from 'styled-components';

const handleMargin = props => {
  if (!props || !props?.margin) return 0;
  return `${props.margin}px`;
};

const handleMaxWidth = props => {
  if (!props || !props?.maxWidth) return null;
  return `${props.maxWidth}px`;
};

const StyledEmbedVideo = styled.section`
  margin: 0 auto;
  margin: ${props => handleMargin(props)} auto;
  max-width: ${props => handleMaxWidth(props)};

  .video__wrapper {
    height: 0;
    padding-bottom: 56.25%;
    position: relative;
    width: 100%;
  }

  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export default StyledEmbedVideo;
