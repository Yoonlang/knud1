import Image from 'next/future/image';
import styled from 'styled-components';
import ice from '/public/assets/ice.jpeg';

const Works: React.FC = () => {
  return (
    <WorksDiv>
      <Work src={ice} />
      <Work src={ice} />
    </WorksDiv>
  );
};

const WorksDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 130%;
  height: 100%;
  overflow: scroll;
  @media (max-width: 1023px) {
    width: 100%;
    height: 100vh;
    background: #000;
    z-index: 0;
    & > img {
      opacity: 0.5;
    }
  }
`;

const Work = styled(Image)`
  width: 100%;
`;

export default Works;
