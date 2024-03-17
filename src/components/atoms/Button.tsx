
interface PropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
  category: string;
  className?: string;
  children: React.PropsWithChildren<string | React.ReactNode>;
};

export const Button = ({ children, category, className, ...props }: PropTypes) => {
  return (
    <button {...props} className={`button is-${category} ${className}`}>
      {children}
    </button>
  );
}