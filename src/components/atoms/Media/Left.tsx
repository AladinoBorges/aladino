import { ReactChildren } from '@/types/global';

interface MediaLeftPropTypes {
  children: ReactChildren;
}

export const MediaLeftAtom = ({ children }: MediaLeftPropTypes) => {
  return <div className='media-left'>{children}</div>;
};
