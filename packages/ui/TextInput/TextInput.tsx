import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type TextInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'onChange'
> & {
  onChange: (value: string) => void;
};

export const TextInput = ({ onChange, ...props }: TextInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return <input className="border-4 p-2" type="text" onChange={handleChange} {...props} />;
};
