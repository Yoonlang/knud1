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
    call: string;
  };
}

const Profile: React.FC<Props> = (props) => {
  const { main = false, data } = props;
  const { img, name, mail, insta, call } = data;
  return (
    <StyledProfile main={main}>
      <div className={'profileImg'}>
        <StyledImage loader={nextImageLoader} src={img} width={98} height={130} priority />
      </div>
      <h3>{name}</h3>
      {mail && (
        <div className={'contact'}>
          <div>
            <StyledImage loader={nextImageLoader} src={'./assets/icon_mail.svg'} width={20} height={20} />
          </div>
          <p>{mail}</p>
        </div>
      )}
      {insta && (
        <div className={'contact'}>
          <div>
            <StyledImage loader={nextImageLoader} src={'./assets/icon_insta.svg'} width={20} height={20} />
          </div>
          <p>{insta}</p>
        </div>
      )}
      {call && (
        <div className={'contact'}>
          <div>
            <StyledImage loader={nextImageLoader} src={'./assets/icon_mobile.svg'} width={20} height={20} />
          </div>
          <p>{call}</p>
        </div>
      )}
    </StyledProfile>
  );
};

export default Profile;
