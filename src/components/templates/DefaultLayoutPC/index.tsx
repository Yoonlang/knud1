import { Column, Row } from 'components/common/styled/layout';
import { AppPaths, AppPathsArray } from 'constants/AppPaths';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { DefaultLayoutPCWrapper } from './styled';
import FooterPC from 'components/common/footer/FooterPC';
import cx from 'classnames';
import Image from 'next/future/image';

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
          <a>
            <Image
              src="/assets/126_logo.svg"
              alt="126-logo"
              width={81.5}
              height={41}
              placeholder="empty"
              priority
              sizes="100vw"
            />
          </a>
        </Link>

        <Row className="nav-items">
          {AppPathsArray.map((appPaths) => {
            const { href, linkText } = appPaths;
            if (linkText === 'Home') {
              return null;
            }

            return (
              <Link href={href} passHref key={href}>
                <a>{linkText}</a>
              </Link>
            );
          })}
        </Row>
        <span
          className={cx('current-nav-wrapper', {
            identity: router.pathname === AppPaths.identity.href,
            archive: router.pathname === AppPaths.archive.href,
            teams: router.pathname === AppPaths.teams.href,
            thanksto: router.pathname === AppPaths.thanksto.href,
          })}
        />
      </Row>
      <div className="frame">
        <Column className="content">
          <main>
            <p className="title">{AppPathsArray.find((appPaths) => appPaths.href === router.route)?.linkText}</p>

            {children}
          </main>
          <FooterPC />
        </Column>
      </div>
    </DefaultLayoutPCWrapper>
  );
};

export default DefaultLayoutPC;
