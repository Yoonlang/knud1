import Image from 'next/future/image';
import { RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { nextImageLoader } from 'utils/imageLoader';
import { ARCHIVE_DATA } from './pages/ArchivePage/constants';

interface Props {
  unit: RefObject<HTMLDivElement>;
}

const Works: React.FC<Props> = (props) => {
  const { unit } = props;
  const works = useRef<HTMLDivElement>(null);
  const [startImageLoading, setStartImageLoading] = useState(false);

  useEffect(() => {
    if (!unit.current && !works.current) return;

    const callback = () => {
      const worksCurrent = works.current as HTMLDivElement;
      const unitCurrent = unit.current as HTMLDivElement;
      if (worksCurrent?.scrollHeight === 0) return;
      const where = worksCurrent.scrollTop / (worksCurrent.scrollHeight / 27);
      unitCurrent.scrollTop = where * unitCurrent.offsetHeight;
    };

    works.current?.addEventListener('scroll', callback);
    window.addEventListener('resize', callback);

    return () => {
      works.current?.removeEventListener('scroll', callback);
      window.removeEventListener('resize', callback);
    };
  }, []);

  useEffect(() => {
    setStartImageLoading(true);
  }, []);

  return (
    <WorksDiv ref={works}>
      {startImageLoading &&
        ARCHIVE_DATA.map((data, index) => {
          return (
            <div key={index}>
              <Work
                loader={nextImageLoader}
                alt={data.title}
                src={`./assets/${data.producer}/thumbnail.png`}
                width={1800}
                height={1100}
                priority
              />
            </div>
          );
        })}
      <div>
        <Work
          loader={nextImageLoader}
          alt={'곽테일'}
          src={`./assets/곽나영/thumbnail.png`}
          width={1800}
          height={1100}
        />
      </div>
    </WorksDiv>
  );
};

const WorksDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
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
