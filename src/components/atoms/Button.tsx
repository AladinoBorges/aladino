import { ReactChildren } from '@/types/global';

interface PropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  category: string;
  className?: string;
  children: ReactChildren;
}

export const ButtonAtom = ({ children, category, className, ...props }: PropTypes) => {
  return (
    <button {...props} className={`button is-${category} ${className}`}>
      {children}
    </button>
  );
};
