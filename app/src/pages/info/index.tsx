import { useEffect, useState } from 'preact/hooks';

import Select from '@/components/Select.js';
import TextInput from '@/components/TextInput.js';
import volunteerFields from './volunteerFields.js';
import Checkbox from '@/components/Checkbox.js';
import Button from '@/components/Button.js';

export default function Info() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/api/volunteer')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const handleSubmit = async () => {};

  return (
    <div className="max-w-[30rem] p-4">
      <h1 className="text-xl font-bold">Personal Information</h1>

      <form>
        {Object.entries(volunteerFields).map(([key, field]) => (
          <Input key={key} name={key} field={field} />
        ))}
      </form>

      <Button className="mt-3" label="Submit" onClick={handleSubmit} />
    </div>
  );
}

function Input({ field, name }) {
  if (field.type === 'select') {
    return (
      <Select
        name={name}
        label={field.label}
        options={field.options.map(option => ({ label: option, value: option }))}
        onChange={() => {}}
      />
    );
  }

  if (field.type === 'checkbox') {
    return <Checkbox name={name} label={field.label} onChange={() => {}} />;
  }

  return <TextInput name={name} label={field.label} type={field.type} onChange={() => {}} />;
}
