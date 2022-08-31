import { BarContainer, GradationBar, BlockBar, ColBarContainer, GradationColBar } from './styled';

const AnimatedBar: React.FC = () => {
  return (
    <BarContainer>
      <GradationBar />
      <BlockBar />
    </BarContainer>
  );
};

const AnimatedColBar: React.FC = () => {
  return (
    <ColBarContainer>
      <GradationColBar />
    </ColBarContainer>
  );
};

export { AnimatedBar, AnimatedColBar };
