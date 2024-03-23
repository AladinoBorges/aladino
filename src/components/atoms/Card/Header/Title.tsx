import { ReactChildrenType } from '@/types/global';

interface CardHeaderTitlePropTypes {
  children: ReactChildrenType;
}

export const CardHeaderTitleAtom = ({ children }: CardHeaderTitlePropTypes) => {
  return <p className='card-header-title'>{children}</p>;
};
