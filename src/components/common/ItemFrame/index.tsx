import React from 'react';
import styled from 'styled-components';
import { ItemFrameWrapper } from './styled';

interface Props {
  title: string;

  className?: string;
  children?: React.ReactNode;
}

const ItemFrame: React.FC<Props> = (props) => {
  const { title, className, children } = props;

  return (
    <ItemFrameWrapper className={className}>
      <p className="title">{title}</p>

      {children}
    </ItemFrameWrapper>
  );
};

export default styled(ItemFrame)``;
