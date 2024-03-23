import { ReactChildren } from '@/types/global';

interface TitleAtomPropTypes extends React.HTMLAttributes<HTMLParagraphElement> {
  isSize: string;
  children: ReactChildren;
}

export const TitleAtom = ({ isSize, children }: TitleAtomPropTypes) => {
  return <p className={`title is-${isSize}`}>{children}</p>;
};
