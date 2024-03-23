import { ReactChildren } from '@/types/global';

interface CardPropTypes {
  children: ReactChildren;
}

export const CardAtom = ({ children }: CardPropTypes) => {
  return <div className='card'>{children}</div>;
};
