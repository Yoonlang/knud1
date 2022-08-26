import Image from 'next/future/image';
import styled from 'styled-components';
import ice from '../public/ice.jpeg';

interface WorksProps {
  mobile?: boolean;
}

const Works = ({ mobile }: WorksProps) => {
  return (
    <WorksDiv className={mobile ? 'mobile' : ''}>
      <Work src={ice} />
      <Work src={ice} />
    </WorksDiv>
  );
};

const WorksDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 130%;
  height: 130%;
  overflow: scroll;
  &.mobile {
    width: 100%;
    height: 100vh;
    background: #000;
    z-index: 0;
    @media (min-width: 1024px) {
      display: none;
    }
  }
  &.mobile > img {
    opacity: 0.5;
  }
`;

const Work = styled(Image)`
  width: 100%;
`;

export default Works;
