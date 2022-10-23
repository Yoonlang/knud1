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
  if (type === 'slide') {
    return (
      <StyledSlide>
        {imgs && imgs[0] && (
          <MyImage
            loader={nextImageLoader}
            src={imgs[0]}
            width={1610}
            height={906}
            maxwidth={'1610px'}
            maxheight={'906px'}
          />
        )}
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
          <div>
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
