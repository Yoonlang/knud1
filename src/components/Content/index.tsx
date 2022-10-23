import Image from 'next/future/image';
import { useEffect, useRef } from 'react';
import { nextImageLoader } from 'utils/imageLoader';
import { MyImage, StyledAdd1, StyledArrange, StyledSlide, Title } from './styled';

interface Props {
  content: {
    type: string;
    title?: string | null;
    detail?: string | null;
    imgs?: string[];
    img?: string;
    video?: string;
  };
}

const Content: React.FC<Props> = (props) => {
  const { type, title, detail, imgs, img, video } = props.content;

  const slide = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!slide.current || !dot.current) return;

    setTimeout(() => {
      console.log('hi');
      if (slide.current) slide.current.scrollLeft = 0;
      console.log('bye');
    }, 1000);

    slide.current.addEventListener('scroll', (e) => {
      if (!dot.current) return;
      if (!e.target) return;
      const pos =
        Math.abs(((e.target as HTMLDivElement).children[0] as HTMLImageElement).x) /
        (e.target as HTMLDivElement).offsetWidth /
        2;
      dot.current.style.left = `${pos * 20}px`;
    });
  }, [slide]);

  if (type === 'slide') {
    return (
      <StyledSlide>
        <div className={'slideContainer'}>
          <div className={'slide'} ref={slide}>
            {imgs?.map((img, index) => {
              return (
                <MyImage
                  key={index}
                  loader={nextImageLoader}
                  src={img}
                  width={1610}
                  height={906}
                  maxwidth={'1610px'}
                  maxheight={'906px'}
                />
              );
            })}
          </div>
          {imgs && imgs.length >= 2 && (
            <div className={'support'}>
              <div className={'dots'}>
                {imgs?.map((img, index) => {
                  img;
                  return (
                    <div key={index}>
                      <Image loader={nextImageLoader} src={'./assets/icon_circle-2.svg'} width={10} height={10} />
                    </div>
                  );
                })}
                <div className={'here'} ref={dot}>
                  <Image loader={nextImageLoader} src={'./assets/icon_circle.svg'} width={10} height={10} />
                </div>
              </div>
            </div>
          )}
        </div>
        {detail && (
          <div className={'detail'}>
            {detail.split('//').map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        )}
      </StyledSlide>
    );
  }
  if (type === 'add1') {
    return (
      <StyledAdd1>
        <Title>{title}</Title>
        <div>
          <div className={'img'}>
            {img && (
              <MyImage
                loader={nextImageLoader}
                src={img}
                width={910}
                height={910}
                maxwidth={'910px'}
                maxheight={'910px'}
              />
            )}
          </div>
          <div className={'details'}>
            {detail?.split('//').map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>
      </StyledAdd1>
    );
  }
  if (type === 'portfolio' || type === 'add2') {
    return (
      <StyledArrange>
        <Title>{title}</Title>
        {imgs?.map((img, index) => {
          return (
            <MyImage
              loader={nextImageLoader}
              src={img}
              width={1610}
              height={906}
              maxwidth={'1610px'}
              maxheight={'906px'}
              key={index}
            />
          );
        })}
      </StyledArrange>
    );
  }
  // if (type === 'add3') {
  // }
  return <></>;
};

export default Content;
