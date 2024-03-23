import { ReactChildren } from '@/types/global';

interface CardHeaderTitlePropTypes {
  children: ReactChildren;
}

export const CardHeaderTitleAtom = ({ children }: CardHeaderTitlePropTypes) => {
  return <p className='card-header-title'>{children}</p>;
};
