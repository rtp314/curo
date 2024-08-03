import { useId } from 'preact/hooks';

type SelectProps = {
  value?: string;
  name?: string;
  label?: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
};

export default function Select({ options, onChange, name, label }: SelectProps) {
  const id = useId();
  return (
    <div className="mt-3">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
      )}
      <select
        id={id}
        name={name}
        defaultValue={options[0].value}
        onChange={e => onChange(e.currentTarget.value)}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
