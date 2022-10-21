import { StyledProfile } from './styled';
import { nextImageLoader } from 'utils/imageLoader';
import { StyledImage } from 'components/common/styled/elements';

interface Props {
  main?: boolean;
  data: {
    img: string;
    name: string;
    mail: string;
    insta: string;
  };
}

const Profile: React.FC<Props> = (props) => {
  const { main = false, data } = props;
  const { img, name, mail, insta } = data;
  return (
    <StyledProfile main={main}>
      <div className={'profileImg'}>
        <StyledImage loader={nextImageLoader} src={img} width={98} height={130} />
      </div>
      <h3>{name}</h3>
      <div className={'contact'}>
        <div>
          <StyledImage loader={nextImageLoader} src={'./assets/mail.png'} width={20} height={20} />
        </div>
        <p>{mail}</p>
      </div>
      <div className={'contact'}>
        <div>
          <StyledImage loader={nextImageLoader} src={'./assets/insta.png'} width={20} height={20} />
        </div>
        <p>{insta}</p>
      </div>
    </StyledProfile>
  );
};

export default Profile;
