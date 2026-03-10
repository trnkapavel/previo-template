import * as React from 'react';

type ElementProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Eyebrow<T extends React.ElementType = 'p'>({
  as,
  className,
  ...props
}: ElementProps<T>) {
  const Component = as || 'p';
  return (
    <Component
      className={cn(
        'text-xs md:text-sm font-medium uppercase tracking-[0.22em] text-primary-700',
        className,
      )}
      {...props}
    />
  );
}

export function PageTitle<T extends React.ElementType = 'h1'>({
  as,
  className,
  ...props
}: ElementProps<T>) {
  const Component = as || 'h1';
  return (
    <Component
      className={cn(
        'font-outfit font-bold tracking-tight text-slate-900 text-4xl md:text-5xl lg:text-6xl leading-[1.1]',
        className,
      )}
      {...props}
    />
  );
}

export function SectionTitle<T extends React.ElementType = 'h2'>({
  as,
  className,
  ...props
}: ElementProps<T>) {
  const Component = as || 'h2';
  return (
    <Component
      className={cn(
        'font-outfit font-bold text-slate-900 text-2xl md:text-3xl leading-snug',
        className,
      )}
      {...props}
    />
  );
}

export function Subheading<T extends React.ElementType = 'h3'>({
  as,
  className,
  ...props
}: ElementProps<T>) {
  const Component = as || 'h3';
  return (
    <Component
      className={cn(
        'font-semibold text-slate-900 text-xl md:text-2xl leading-snug',
        className,
      )}
      {...props}
    />
  );
}

export function Lead<T extends React.ElementType = 'p'>({
  as,
  className,
  ...props
}: ElementProps<T>) {
  const Component = as || 'p';
  return (
    <Component
      className={cn(
        'text-lg md:text-xl text-slate-700 leading-relaxed',
        className,
      )}
      {...props}
    />
  );
}

export function Body<T extends React.ElementType = 'p'>({
  as,
  className,
  ...props
}: ElementProps<T>) {
  const Component = as || 'p';
  return (
    <Component
      className={cn('text-base text-slate-600 leading-relaxed', className)}
      {...props}
    />
  );
}

export function Small<T extends React.ElementType = 'p'>({
  as,
  className,
  ...props
}: ElementProps<T>) {
  const Component = as || 'p';
  return (
    <Component
      className={cn('text-sm text-slate-500 leading-relaxed', className)}
      {...props}
    />
  );
}

