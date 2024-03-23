import { ReactChildren } from '@/types/global';

interface CardContentPropTypes {
  children: ReactChildren;
}

export const CardContentAtom = ({ children }: CardContentPropTypes) => {
  return <div className='card-content'>{children}</div>;
};
