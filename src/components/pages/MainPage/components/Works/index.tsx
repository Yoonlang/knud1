import { PRODUCER, PRODUCER_NAME, PRODUCER_TITLE } from 'constants/producer';
import { RefObject, useRef, useState } from 'react';
import { nextImageLoader } from 'utils/imageLoader';
import { useMount } from 'utils/useMount';
import { Work, WorksDiv } from './styled';

interface Props {
  unit: RefObject<HTMLDivElement>;
}

const Works: React.FC<Props> = (props) => {
  const { unit } = props;
  const works = useRef<HTMLDivElement>(null);
  const [startImageLoading, setStartImageLoading] = useState(false);

  useMount(() => {
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
  });

  useMount(() => {
    setStartImageLoading(true);
  });

  return (
    <WorksDiv ref={works}>
      {startImageLoading &&
        Object.values(PRODUCER).map((producer, index) => {
          return (
            <div key={index}>
              <Work
                loader={nextImageLoader}
                alt={PRODUCER_TITLE[producer]}
                src={`./assets/${PRODUCER_NAME[producer]}/thumbnail.png`}
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
