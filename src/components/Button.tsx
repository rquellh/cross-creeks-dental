import { clsx } from 'clsx';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled = false,
  children,
  className,
  target,
  rel,
}: ButtonProps) {
  const baseClasses = 'inline-block px-6 py-3 rounded-md font-semibold transition-all duration-200 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-medium focus-visible:ring-offset-2';

  const variantClasses = {
    primary: 'bg-brand-deep text-white hover:bg-brand-medium active:bg-brand-deep active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-white text-brand-deep hover:bg-bg-off-white active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border-2 border-brand-deep text-brand-deep hover:bg-brand-deep/10 active:bg-brand-deep/20 disabled:opacity-50 disabled:cursor-not-allowed'
  };

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    className
  );

  if (href && !disabled) {
    const finalHref = href.startsWith('http') || href.startsWith('#')
      ? href
      : `${import.meta.env.BASE_URL}${href.replace(/^\//, '')}`;

    return (
      <a
        href={finalHref}
        className={classes}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
