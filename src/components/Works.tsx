import Image from 'next/future/image';
import styled from 'styled-components';
import { nextImageLoader } from 'utils/imageLoader';
import { ARCHIVE_DATA } from './pages/ArchivePage/constants';

const Works: React.FC = () => {
  return (
    <WorksDiv>
      {ARCHIVE_DATA.map((data, index) => {
        return (
          <div key={index}>
            <Work
              loader={nextImageLoader}
              alt={data.title}
              src={`./assets/${data.producer}/thumbnail.png`}
              width={1800}
              height={1100}
            />
          </div>
        );
      })}
    </WorksDiv>
  );
};

const WorksDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1950px;
  height: 100%;
  overflow: scroll;
  & > div {
    width: 100%;
    height: 100%;
    & img {
      opacity: 0.5;
    }
  }
  @media (min-width: 1023px) {
    gap: 100px;
  }
  @media (max-width: 1023px) {
    width: 100%;
    height: 100vh;
    background: #000;
    z-index: 0;
  }
`;

const Work = styled(Image)`
  width: 1800px;
  @media (max-width: 1023px) {
    width: 100%;
    height: 100%;
  }
`;

export default Works;
