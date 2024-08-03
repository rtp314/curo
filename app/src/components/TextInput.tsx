import clsx from 'clsx';

type TextInputProps = {
  onChange: (value: string) => void;
  className?: string;
  name?: string;
  label?: string;
  type?: string;
};

export default function TextInput({ onChange, className, label, type, name, ...props }: TextInputProps) {
  return (
    <div className={'mt-3'}>
      {label && <label className="block text-sm font-medium leading-6 text-gray-900">{label}</label>}
      <div className="mt-2">
        <input
          className={clsx(
            'block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            className,
          )}
          type={type || 'text'}
          name={name}
          onChange={e => onChange(e.currentTarget.value)}
          {...props}
        />
      </div>
    </div>
  );
}
