import { ReactChildrenType } from '@/types/global';

interface CardContentPropTypes {
  children: ReactChildrenType;
}

export const CardContentAtom = ({ children }: CardContentPropTypes) => {
  return <div className='card-content'>{children}</div>;
};
