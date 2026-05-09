interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function PrimaryButton({ children, href, onClick, className = '' }: PrimaryButtonProps) {
  const baseClass =
    'inline-block px-10 py-3.5 text-button text-gold border border-gold bg-transparent ' +
    'hover:bg-gold hover:text-noir-900 transition-all duration-400 ease-out ' +
    'focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-noir-900 ' +
    className;

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
