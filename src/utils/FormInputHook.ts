import { ChangeEvent, useState } from 'react';

export function useFormInput (initialValue: string): any {
  const [value, setValue] = useState(initialValue);

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return {
    value, onChange: handleChange
  };
}
