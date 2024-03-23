import { ReactChildrenType } from '@/types/global';

interface PropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  category: string;
  className?: string;
  children: ReactChildrenType;
}

export const ButtonAtom = ({ children, category, className, ...props }: PropTypes) => {
  return (
    <button {...props} className={`button is-${category} ${className}`}>
      {children}
    </button>
  );
};
