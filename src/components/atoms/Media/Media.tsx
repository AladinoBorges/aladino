import { ReactChildren } from '@/types/global';

interface MediaPropTypes {
  children: ReactChildren;
}

export const MediaAtom = ({ children }: MediaPropTypes) => {
  return <div className='media'>{children}</div>;
};
