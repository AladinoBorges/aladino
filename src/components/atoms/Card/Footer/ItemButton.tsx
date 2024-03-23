import { ReactChildren } from '@/types/global';

interface CardPropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactChildren;
}

export const CardFooterButtonItemAtom = ({ children }: CardPropTypes) => {
  return <button className='card-footer-item'>{children}</button>;
};
