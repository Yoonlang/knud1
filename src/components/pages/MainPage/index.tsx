import { AnimatedColBar, AnimatedBar } from 'components/AnimatedBar';
import SideBar from 'components/common/SideBar';
import MainIcon from 'components/MainIcon';
import Nav from 'components/Nav';
import Works from 'components/Works';
import { FixedTypo, Mobile, Page, PC, Rotate } from './styled';

const MainPage: React.FC = () => {
  return (
    <Page>
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
        <Works />
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
          <Works />
        </Rotate>
      </PC>
    </Page>
  );
};

export default MainPage;
