import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: Variant;
  className?: string;
}

type Variant = 'plain' | 'outlined' | 'error';

const inputVariants = {
  essentialStyles: `text-gray-600 placeholder-gray-500 focus:border-purple-600 transition duration-100 outline-none outline-offset-0 outline-1 px-4 py-3 w-full disabled:opacity-50 disabled:cursor-not-allowed font-host-grotesk text-[1.4rem]`,
  variant: {
    plain: 'border border-black bg-white border-2 rounded-md',
    outlined: 'border rounded-md border-2',
    error: 'border-2 bg-gray-50 border border-red-700 rounded-md focus:border-red-700',
  },
};

const input = React.forwardRef<HTMLInputElement, InputProps>(({ variant = 'plain', className = '', ...props }, ref) => {
  return <input ref={ref} className={`${inputVariants.essentialStyles} ${inputVariants.variant[variant]} ${className}`} {...props} />;
});

input.displayName = 'Input';

export default input;
