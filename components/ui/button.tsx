import * as React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-2 rounded-[3px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-70 disabled:cursor-not-allowed transition-all';

const size = 'px-8 py-4 text-base md:text-lg';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20',
  secondary:
    'border border-primary-600 text-primary-700 bg-white hover:bg-primary-50 text-sm',
  ghost: 'text-primary-600 hover:text-primary-700 text-sm',
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

type BaseButtonProps = {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

export interface ButtonProps
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  href?: never;
}

export interface ButtonLinkProps
  extends BaseButtonProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  href: string;
}

function getButtonClasses(
  variant: ButtonVariant,
  fullWidth?: boolean,
  className?: string
) {
  return cn(
    base,
    variants[variant],
    !fullWidth && 'w-auto',
    fullWidth && 'w-full',
    variant !== 'ghost' && size,
    className
  );
}

export function Button({
  variant = 'primary',
  fullWidth,
  iconLeft,
  iconRight,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={rest.type ?? 'button'}
      className={getButtonClasses(variant, fullWidth, className)}
      {...rest}
    >
      {iconLeft ? <span className="shrink-0">{iconLeft}</span> : null}
      <span>{children}</span>
      {iconRight ? <span className="shrink-0">{iconRight}</span> : null}
    </button>
  );
}

export function ButtonLink({
  variant = 'primary',
  fullWidth,
  iconLeft,
  iconRight,
  className,
  href,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={getButtonClasses(variant, fullWidth, className)}
      {...rest}
    >
      {iconLeft ? <span className="shrink-0">{iconLeft}</span> : null}
      <span>{children}</span>
      {iconRight ? <span className="shrink-0">{iconRight}</span> : null}
    </Link>
  );
}

