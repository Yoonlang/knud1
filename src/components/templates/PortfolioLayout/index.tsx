import FooterPC from 'components/common/footer/FooterPC';
import Profile from 'components/Profile';
import { ContentLayout, StyledPortfolioLayout } from './styled';
import sample from '/public/assets/sample.png';
import { nextImageLoader } from 'utils/imageLoader';
import { StyledImage } from 'components/common/styled/elements';
import Link from 'next/link';
import FooterMobile from 'components/common/footer/FooterMobile';

interface Props {
  children?: React.ReactElement;
}

const PortfolioLayout: React.FC<Props> = (props) => {
  const children = { props };

  return (
    <>
      <StyledPortfolioLayout>
        <div className={'wrapper'}>
          <div className={'sidebar onlyPC'}>
            <Profile />
          </div>
          <div className={'main'}>
            <div className={'bgImg'}>
              <StyledImage loader={nextImageLoader} src={sample} alt={'mock'} />
            </div>

            <div className={'tag'}></div>
            <Profile main />
            <div className={'titles onlyPC'}>
              <h2>오메가메</h2>
              <h3>오며가며 즐기는 귀촌 라이프</h3>
              <p>
                촌의 표면적인 이미지만 보고 귀촌,귀농을 했다가 다시 도시로 돌아가는 경우가 10명 중 1명 꼴로 빈번히
                일어난다. 모든 것이
                <br /> 빠르고 효율적으로 돌아가는 도시 생활에 익숙한 현 세대들은 시골의 투박함과 부족함에 곧바로
                적응하기 힘들다.{' '}
              </p>
              <div>
                <h4># 귀촌</h4>
                <h4># 느림의_미학</h4>
                <h4># 시골</h4>
              </div>
            </div>

            <ContentLayout />
            <ContentLayout />
            <ContentLayout />
          </div>
          <Link href={'/archive'} passHref>
            <a className={'link'}>back to archive</a>
          </Link>
        </div>
        <div className={'footer'}>
          <FooterPC />
          <FooterMobile />
        </div>
      </StyledPortfolioLayout>
    </>
  );
};

export default PortfolioLayout;
