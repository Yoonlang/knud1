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

  height: 100%;
  overflow: scroll;
  & > div {
    width: 100%;
    height: 100%;
    & img {
      opacity: 0.5;
    }
  }
  @media (min-width: 1024px) {
    gap: 100px;
    min-width: 1950px;
  }
  @media (max-width: 1023px) {
    gap: 400px;
    & > div {
      margin-top: -50px;
      display: flex;
      min-height: 100vh;
      justify-content: center;
      transform: rotate(-15deg);
    }
    width: 100%;
    height: 100vh;
    background: #000;
    z-index: 0;
  }
`;

const Work = styled(Image)`
  @media (min-width: 1024px) {
    width: 1800px;
  }
  @media (max-width: 1023px) {
    height: 115%;
  }
`;

export default Works;
