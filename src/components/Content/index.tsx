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
  const left = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (type !== 'slide') return;
    if (!slide.current || !dot.current || !left.current) return;
    left.current.style.display = 'none';
    slide.current.childNodes.forEach((child) => {
      child.addEventListener('load', (e) => {
        if (slide.current) slide.current.scrollLeft = 0;
      });
    });

    slide.current.addEventListener('scroll', (e) => {
      if (!dot.current) return;
      if (!e.target) return;
      const eTarget = e.target as HTMLDivElement;
      const pos = eTarget.scrollLeft / eTarget.offsetWidth;
      if (left.current)
        if (pos >= 0.5) left.current.style.display = 'flex';
        else left.current.style.display = 'none';
      dot.current.style.left = `${pos * 20}px`;
    });
  }, [slide]);

  const goLeft = () => {
    if (!slide.current) return;
    const { scrollLeft, scrollWidth, offsetWidth } = slide.current;
    if ((scrollLeft - offsetWidth) % scrollWidth <= 0) slide.current.scrollLeft = 0;
    else slide.current.scrollLeft = (scrollLeft - offsetWidth) % scrollWidth;
  };

  const goRight = () => {
    if (!slide.current) return;
    const { scrollLeft, scrollWidth, offsetWidth } = slide.current;
    slide.current.scrollLeft = (scrollLeft + offsetWidth + 1) % scrollWidth;
  };

  if (type === 'slide') {
    return (
      <StyledSlide>
        <div className={'slideContainer'}>
          <div className={'slide'} ref={slide}>
            {imgs?.map((img, index) => {
              return (
                <MyImage
                  className={'slideImg'}
                  key={index}
                  loader={nextImageLoader}
                  src={img}
                  width={1610}
                  height={906}
                  maxwidth={'1610px'}
                  maxheight={'906px'}
                  priority
                />
              );
            })}
          </div>
          {imgs && imgs.length >= 2 && (
            <div className={'support'}>
              <div className={'slideButtons'}>
                <button className={'left'} onClick={goLeft} ref={left}>
                  <Image loader={nextImageLoader} src={'./assets/icon_arrow.svg'} width={30} height={30} />
                </button>
                <button className={'right'} onClick={goRight}>
                  <Image loader={nextImageLoader} src={'./assets/icon_arrow.svg'} width={30} height={30} />
                </button>
              </div>
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
                priority
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
              priority
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
