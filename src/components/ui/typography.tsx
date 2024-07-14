import { cn } from '@/lib/style/utils';
import { Ref } from 'react';

interface IProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'pre';
  className?: string;
  children?: React.ReactNode;
  textRef?: Ref<HTMLElement>;
}

export default function Typography({
  type,
  className,
  children,
  textRef,
}: IProps) {
  if (type === 'h1') {
    return (
      <h1
        className={cn(
          'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
          className
        )}
      >
        {children}
      </h1>
    );
  }

  if (type === 'h2') {
    return (
      <h2
        className={cn(
          'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
          className
        )}
      >
        {children}
      </h2>
    );
  }

  if (type === 'h3') {
    return (
      <h3
        className={cn(
          'scroll-m-20 text-2xl font-semibold tracking-tight',
          className
        )}
      >
        {children}
      </h3>
    );
  }

  if (type === 'h4') {
    return (
      <h4
        className={cn(
          'scroll-m-20 text-xl font-semibold tracking-tight',
          className
        )}
      >
        {children}
      </h4>
    );
  }

  if (type === 'p' || type === 'pre') {
    return (
      <p
        className={cn('leading-7', 'whitespace-pre-wrap', className)}
        ref={textRef as Ref<HTMLParagraphElement>}
      >
        {children}
      </p>
    );
  }

  if (type === 'pre') {
    return <pre className={className}>{children}</pre>;
  }
}
