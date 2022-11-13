import FooterPC from 'components/common/footer/FooterPC';
import Profile from 'components/templates/PortfolioLayout/components/Profile';
import { ContentLayout, StyledPortfolioLayout } from './styled';
import { nextImageLoader } from 'utils/imageLoader';
import { StyledImage } from 'components/common/styled/elements';
import Image from 'next/future/image';
import Link from 'next/link';
import FooterMobile from 'components/common/footer/FooterMobile';
import Content from 'components/templates/PortfolioLayout/components/Content';
import { portfolioData } from 'constants/portfolioData';

interface Props {
  uri: string;
}

interface Titles {
  title: string;
  slogan: string;
  detail: string;
  hashtag: string[];
  thumbnail: string;
}

interface Info {
  uri: string;
  icon: string;
  profile: {
    img: string;
    name: string;
    mail: string;
    insta: string;
    call: string;
  };
}

interface PortfolioContent {
  type: string;
  title?: string | null;
  detail?: string | null;
  imgs?: string[];
  img?: string;
  video?: string;
}

const PortfolioLayout: React.FC<Props> = (props) => {
  const { uri } = props;
  const titles: Titles = portfolioData[uri].titles;
  const info: Info = portfolioData[uri].info;
  const contents: PortfolioContent[] = portfolioData[uri].contents;

  return (
    <>
      <StyledPortfolioLayout>
        <div>
          <div className={'wrapper'}>
            <div className={'sidebar onlyPC'}>
              <Profile data={info.profile} />
            </div>
            <div className={'main'}>
              <div className={'bgImg'}>
                <StyledImage loader={nextImageLoader} src={titles.thumbnail} width={1800} height={1100} priority />
              </div>

              <div className={'tag'}>
                <Image loader={nextImageLoader} alt="info-icon" src={info.icon} width={150} height={60} priority />
              </div>
              <Profile main data={info.profile} />
              <div className={'titles'}>
                <h2>{titles.title}</h2>
                <h3>{titles.slogan}</h3>
                <div className={'paragraphs'}>
                  {titles.detail.split('//').map((paragraph, index) => {
                    return <p key={index}>{paragraph}</p>;
                  })}
                </div>
                <div className={'hashtag'}>
                  {titles.hashtag.map((hashtag, index) => {
                    return <h4 key={index}># {hashtag}</h4>;
                  })}
                </div>
              </div>
              <div className={'titlesForMob'}>
                <h3>{titles.slogan}</h3>
                <h2>; {titles.title}</h2>
              </div>

              <ContentLayout>
                {contents.map((content, index) => {
                  return <Content content={content} key={index}></Content>;
                })}
              </ContentLayout>
            </div>
            <Link href={'/archive'} passHref>
              <a className={'link'}>back to archive</a>
            </Link>
          </div>
          <div className={'footer'}>
            <FooterPC />
            <FooterMobile />
          </div>
        </div>
      </StyledPortfolioLayout>
    </>
  );
};

export default PortfolioLayout;
