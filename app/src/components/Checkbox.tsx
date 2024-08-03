import { useId } from 'preact/hooks';

type CheckboxProps = {
  checked?: boolean;
  name?: string;
  label?: string;
  description?: string;
  onChange: (value: boolean) => void;
};

export default function Checkbox({ label, description, onChange, name }: CheckboxProps) {
  const id = useId();
  return (
    <div className="relative flex items-start mt-3">
      <div className="flex h-6 items-center">
        <input
          id={id}
          name={name}
          type="checkbox"
          aria-describedby={`${id}-description`}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          onChange={e => onChange(e.currentTarget.checked)}
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        {label && (
          <label htmlFor={id} className="font-medium text-gray-900">
            {label}
          </label>
        )}
        {description && (
          <p id={`${id}-description`} className="text-gray-500">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
