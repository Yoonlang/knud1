import { RefObject, useEffect, useRef, useState } from 'react';
import { nextImageLoader } from 'utils/imageLoader';
import { ARCHIVE_DATA } from '../../../ArchivePage/constants';
import { Work, WorksDiv } from './styled';

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

export default Works;
