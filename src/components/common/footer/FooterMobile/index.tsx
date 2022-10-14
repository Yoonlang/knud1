import Image from 'next/future/image';
import React from 'react';
import { FooterMobileWrapper } from './styled';

const FooterMobile: React.FC = () => {
  return (
    <FooterMobileWrapper>
      <Image src="/assets/knu_logo.svg" alt="knu-logo" width={50} height={15.5} placeholder="empty" priority />

      <p>vcd.knu.ac.kr</p>
      <p>{`[41566] 우)41566 대구광역시 북구 대학로80(산격동) 경북대학교 예술대학 디자인학과`}</p>
      <p>T.053-950-5694 /F.053-950-5695</p>
    </FooterMobileWrapper>
  );
};

export default FooterMobile;
