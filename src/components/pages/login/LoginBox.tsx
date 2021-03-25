import React, { useState, ChangeEvent } from 'react';

import FieldUsername from '../../elements/FieldUsername';
import FieldPassword from '../../elements/FieldPassword';
import { Button, Card, Form } from 'react-bootstrap';

function LoginBox(): JSX.Element {
  const username = useFormInput('');
  const password = useFormInput('');
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">
          <h3>Login</h3>
        </Card.Title>
        <Form>
          <FieldUsername {...username} autoFocus={false} required={true} />
          <FieldPassword {...password} autoFocus={false} required={true} />
          <Button type="submit" className="w-100 col-6 offset-3">
            Sign in
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

function useFormInput(initialValue: string | number) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return {
    value, onChange: handleChange
  }
}

export default LoginBox;
