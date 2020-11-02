import styled from 'styled-components';

const ImageLayout = styled.div`
  width: 70px;
  min-height: 70px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.colored ? 'linear-gradient(45deg, #D07FF3, #495BCB)' : 'black'};
`;

export default ImageLayout;
