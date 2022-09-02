import { Column, Row } from 'components/common/styled/layout';
import { AppPaths, AppPathsArray } from 'constants/AppPaths';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/future/image';
import ice from '/public/assets/ice.jpeg';

import { DefaultLayoutPCWrapper } from './styled';
import FooterPC from 'components/common/footer/FooterPC';

interface Props {
  children?: React.ReactElement;
}

const DefaultLayoutPC: React.FC<Props> = (props) => {
  const { children } = props;

  const router = useRouter();

  return (
    <DefaultLayoutPCWrapper>
      <Row className="nav">
        <Link href={AppPaths.home.href} passHref>
          <a>126</a>
        </Link>

        <Row className="nav-items">
          {AppPathsArray.map((appPaths) => {
            const { href, linkText } = appPaths;

            return (
              <Link href={href} passHref key={href}>
                <a className={router.pathname === href ? 'nav-items-target' : ''}>{linkText}</a>
              </Link>
            );
          })}
        </Row>
      </Row>
      <div className="frame">
        <Column className="content">
          <main>
            {/* <p className="title">{AppPathsArray.find((appPaths) => appPaths.href === router.route)?.linkText}</p> */}
            <p className="title">{'Archive'}</p>

            <Image src={ice} alt={'ice'} width={1200} />
            <Image src={ice} alt={'ice'} width={600} />
            <Image src={ice} alt={'ice'} width={600} />
            <Image src={ice} alt={'ice'} width={600} />
            {children}
          </main>
          <FooterPC />
        </Column>
      </div>
    </DefaultLayoutPCWrapper>
  );
};

export default DefaultLayoutPC;
