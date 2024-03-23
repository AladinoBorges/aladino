import { ReactChildrenType } from '@/types/global';

interface CardImagePropTypes {
  children: ReactChildrenType;
}

export const CardImageContainerAtom = ({ children }: CardImagePropTypes) => {
  return <div className='card-image'>{children}</div>;
};
