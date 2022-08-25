import Image from 'next/future/image';
import styled from 'styled-components';
import ice from '../public/ice.jpeg';

const Works = () => {
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
  margin-top: 100px;
  margin-left: 300px;
  width: 100%;
  height: 500px;
  background: #fff;
  overflow: scroll;
`;

const Work = styled(Image)`
  width: 100%;
`;

export default Works;
