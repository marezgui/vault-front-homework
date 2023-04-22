import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type SearchInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'onChange'
> & {
  onChange: (value: string) => void;
};

export const SearchInput = ({ onChange, ...props }: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return (
    <>
      <label className="relative text-gray-400 focus-within:text-gray-600 block">
        <MagnifyingGlassIcon className=" text-gray-500 pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" />

        <input
          className="form-input border-2 border-gray-500 py-3 px-4 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none"
          id="search"
          type="text"
          name="search"
          onChange={handleChange}
          {...props}
        />
      </label>
    </>
  );
};
