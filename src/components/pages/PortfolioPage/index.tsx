import PortfolioLayout from 'components/templates/PortfolioLayout';
import { PRODUCER, Producer } from 'constants/producer';
import { useRouter } from 'next/router';

const PortfolioPage: React.FC = () => {
  const router = useRouter();

  const uri = (router.asPath.split('/')[2] ?? PRODUCER['ojh']) as Producer;

  return <PortfolioLayout uri={uri} />;
};

export default PortfolioPage;
