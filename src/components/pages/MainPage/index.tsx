import { AnimatedColBar, AnimatedBar } from 'components/AnimatedBar';
import SideBar from 'components/common/SideBar';
import MainIcon from 'components/MainIcon';
import Nav from 'components/Nav';
import Works from 'components/Works';
import { Mobile, Page, PC, Rotate } from './styled';

const MainPage: React.FC = () => {
  return (
    <Page>
      <Mobile>
        <SideBar home />
        <MainIcon />
        <AnimatedColBar />
        <Works />
      </Mobile>
      <PC>
        <Rotate>
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
