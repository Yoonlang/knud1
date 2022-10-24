import { AnimatedColBar, AnimatedBar } from 'components/AnimatedBar';
import SideBar from 'components/common/SideBar';
import MainIcon from 'components/MainIcon';
import Nav from 'components/Nav';
import Works from 'components/Works';
import Image from 'next/future/image';
import { useRef } from 'react';
import { nextImageLoader } from 'utils/imageLoader';
import { ARCHIVE_DATA } from '../ArchivePage/constants';
import { FixedTypo, Mobile, Page, PC, Rotate } from './styled';

const MainPage: React.FC = () => {
  const unit = useRef<HTMLDivElement>(null);

  return (
    <Page>
      <div className={'unit'} ref={unit}>
        {ARCHIVE_DATA.map((data, index) => (
          <div key={index}>
            <Image
              loader={nextImageLoader}
              src={`./assets/${data.producer}/personal_unit.png`}
              width={880}
              height={270}
            />
          </div>
        ))}
      </div>
      <Mobile>
        <SideBar home />
        <FixedTypo>
          2022
          <br />
          KNU DESIGN
          <br />
          GRADUATION EXHIBITION
        </FixedTypo>
        <MainIcon />
        <AnimatedColBar />
        <Works unit={unit} />
      </Mobile>
      <PC>
        <Rotate>
          <FixedTypo>
            2022
            <br />
            KNU DESIGN
            <br />
            GRADUATION EXHIBITION
          </FixedTypo>
          <MainIcon />
          <Nav />
          <AnimatedBar />
          <AnimatedColBar />
          <Works unit={unit} />
        </Rotate>
      </PC>
    </Page>
  );
};

export default MainPage;
