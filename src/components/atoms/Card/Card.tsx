import { ReactChildrenType } from '@/types/global';

interface CardPropTypes {
  children: ReactChildrenType;
}

export const CardAtom = ({ children }: CardPropTypes) => {
  return <div className='card'>{children}</div>;
};
