import clsx from 'clsx';

type ButtonProps = {
  onClick: () => void;
  className?: string;
  label: string;
};

export default function Button({ onClick, className, label }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
        className,
      )}
    >
      {label}
    </button>
  );
}
