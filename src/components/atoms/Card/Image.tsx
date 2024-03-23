import { ReactChildren } from '@/types/global';

interface CardImagePropTypes {
  children: ReactChildren;
}

export const CardImageContainerAtom = ({ children }: CardImagePropTypes) => {
  return <div className='card-image'>{children}</div>;
};
