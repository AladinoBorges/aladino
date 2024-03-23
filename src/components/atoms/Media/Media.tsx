import { ReactChildrenType } from '@/types/global';

interface MediaPropTypes {
  children: ReactChildrenType;
}

export const MediaAtom = ({ children }: MediaPropTypes) => {
  return <div className='media'>{children}</div>;
};
