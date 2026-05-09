interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function SecondaryButton({ children, href, onClick, className = '' }: SecondaryButtonProps) {
  const baseClass =
    'inline-block px-10 py-3.5 text-button text-noir-900 bg-gold ' +
    'hover:bg-gold-light transition-all duration-300 ease-out ' +
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
