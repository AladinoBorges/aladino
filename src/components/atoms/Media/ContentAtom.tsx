import { ReactChildren } from '@/types/global';

interface MediaContentAtomPropTypes {
  children: ReactChildren;
}

export const MediaContentAtom = ({ children }: MediaContentAtomPropTypes) => {
  return <div className='media-content'>{children}</div>;
};
