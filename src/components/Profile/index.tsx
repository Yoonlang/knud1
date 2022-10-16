import { StyledProfile } from './styled';

interface Props {
  main?: boolean;
}

const Profile: React.FC<Props> = (props) => {
  const { main = false } = props;
  return (
    <StyledProfile main={main}>
      <div className={'profileImg'}></div>
      <h3>오지현</h3>
      <div className={'contact'}>
        <div></div>
        <p>ojihyeon073@gmail.com</p>
      </div>
      <div className={'contact'}>
        <div></div>
        <p>@o_jibari</p>
      </div>
    </StyledProfile>
  );
};

export default Profile;
