import React from 'react';
import Input from './input';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  variant?: Variant;
  onCancel?: () => void;
  hasCancelButton?: boolean;
  className?: string;
  inputClassName?: string;
}

type Variant = 'plain' | 'outlined';

const SearchIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={`lucide lucide-search ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  );
};

const CancelIcon = ({ className, onClick }: { className: string; onClick: () => void }) => {
  return (
    <svg
      className={`lucide lucide-x ${className}`}
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
  );
};

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ value = '', onCancel, variant = 'plain', hasCancelButton = false, className, inputClassName, ...props }, ref) => {
    return (
      <div className={`relative flex items-center ${className}`}>
        <Input defaultValue={value} ref={ref} variant={variant} placeholder='Search' className={`px-[40px] !text-[#7B7B7B] ${inputClassName}`} {...props} />
        <SearchIcon className='absolute left-5 h-7 w-7 text-neutral-650' />
        {hasCancelButton && value !== '' && (
          <CancelIcon className='absolute right-3 h-5 w-5 text-gray-400 cursor-pointer' onClick={() => onCancel?.()} />
        )}
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

export default SearchInput;
