import { AnimatedColBar, AnimatedBar } from 'components/pages/MainPage/components/AnimatedBar';
import SideBar from 'components/common/SideBar';
import MainIcon from 'components/pages/MainPage/components/MainIcon';
import Nav from 'components/pages/MainPage/components/Nav';
import Works from 'components/pages/MainPage/components/Works';
import Image from 'next/future/image';
import { useEffect, useRef, useState } from 'react';
import { nextImageLoader } from 'utils/imageLoader';
import { ARCHIVE_DATA } from '../ArchivePage/constants';
import { FixedTypo, Mobile, Page, PC, Rotate } from './styled';

const MainPage: React.FC = () => {
  const [startImageLoading, setStartImageLoading] = useState(false);
  const unit = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStartImageLoading(true);
  }, []);

  return (
    <Page>
      <div className={'unit'} ref={unit}>
        {startImageLoading && (
          <>
            {ARCHIVE_DATA.map((data, index) => (
              <div key={index}>
                <Image
                  loader={nextImageLoader}
                  src={`./assets/${data.producer}/personal_unit.png`}
                  alt="personal_unit"
                  width={880}
                  height={270}
                  priority
                />
              </div>
            ))}
            <div>
              <Image
                loader={nextImageLoader}
                src={`./assets/곽나영/personal_unit.png`}
                alt="personal_unit"
                width={880}
                height={270}
                priority
              />
            </div>
          </>
        )}
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
