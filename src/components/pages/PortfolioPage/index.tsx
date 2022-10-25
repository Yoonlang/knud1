import PortfolioLayout from 'components/templates/PortfolioLayout';
import { useRouter } from 'next/router';

const PortfolioPage: React.FC = () => {
  const router = useRouter();
  const uri = router.asPath.split('/')[2];

  return <PortfolioLayout uri={uri ?? 'ojh'} />;
};

export default PortfolioPage;
