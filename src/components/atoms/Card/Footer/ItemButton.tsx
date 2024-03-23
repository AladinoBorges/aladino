import { ReactChildrenType } from '@/types/global';

interface CardPropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactChildrenType;
}

export const CardFooterButtonItemAtom = ({ children }: CardPropTypes) => {
  return <button className='card-footer-item'>{children}</button>;
};
