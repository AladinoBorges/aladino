import { ReactChildren } from '@/types/global';

interface SubtitleAtomPropTypes extends React.HTMLAttributes<HTMLParagraphElement> {
  isSize: string;
  children: ReactChildren;
}

export const SubtitleAtom = ({ isSize, children }: SubtitleAtomPropTypes) => {
  return <p className={`subtitle is-${isSize}`}>{children}</p>;
};
