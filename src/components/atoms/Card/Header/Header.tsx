import { ReactChildren } from '@/types/global';

interface CardHeaderPropTypes {
  children: ReactChildren;
}

export const CardHeaderAtom = ({ children }: CardHeaderPropTypes) => {
  return <header className='card-header'>{children}</header>;
};
