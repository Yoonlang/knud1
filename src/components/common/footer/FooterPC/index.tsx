import { Row, Column } from 'components/common/styled/layout';
import React from 'react';
import { FooterPCWrapper } from './styled';
import Image from 'next/future/image';

const FooterPC: React.FC = () => {
  return (
    <FooterPCWrapper>
      <Row>
        <Image
          src="/assets/knu_logo.svg"
          alt="knu-logo"
          width={123}
          height={38.5}
          placeholder="empty"
          priority
          sizes="100vw"
        />

        <Column className="contact">
          <p>vcd.knu.ac.kr</p>
          <p>
            {`[41566] 우)41566 대구광역시 북구 대학로80(산격동) 경북대학교 예술대학 디자인학과 / T.053-950-5694 /F.053-950-5695`}
          </p>
        </Column>
      </Row>
    </FooterPCWrapper>
  );
};

export default FooterPC;
