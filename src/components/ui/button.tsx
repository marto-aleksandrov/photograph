import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonProps = {
  className?: string;
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
};

export function Button({ className, href, children, variant = 'primary' }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300',
        variant === 'primary'
          ? 'bg-accent text-background shadow-glow hover:-translate-y-0.5'
          : 'border border-border bg-white/5 text-foreground backdrop-blur hover:bg-white/15',
        className
      )}
    >
      {children}
    </Link>
  );
}
