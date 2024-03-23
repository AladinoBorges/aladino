import { ReactChildren } from '@/types/global';

interface CardImagePropTypes {
  children: ReactChildren;
}

export const CardImageAtom = ({ children }: CardImagePropTypes) => {
  return <div className='card-image'>{children}</div>;
};
