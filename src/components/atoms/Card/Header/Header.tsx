import { ReactChildrenType } from '@/types/global';

interface CardHeaderPropTypes {
  children: ReactChildrenType;
}

export const CardHeaderAtom = ({ children }: CardHeaderPropTypes) => {
  return <header className='card-header'>{children}</header>;
};
