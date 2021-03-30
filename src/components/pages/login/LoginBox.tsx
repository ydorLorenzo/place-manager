import React, { FormEvent, ReactElement } from 'react';

import FieldEmail from '../../elements/FieldEmail';
import FieldPassword from '../../elements/FieldPassword';
import { Button, Card, Form } from 'react-bootstrap';
import { loginAction } from '../../../redux/actions/auth';
import { useAppDispatch } from '../../../types/hooks';
import { useFormInput } from '../../../utils/FormInputHook';

export default function LoginBox (): ReactElement {

  const email = useFormInput('');
  const password = useFormInput('');

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginAction({ email: email.value, password: password.value }));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">
          <h3>Login</h3>
        </Card.Title>
        <Form onSubmit={handleSubmit}>
          <FieldEmail {...email} autoFocus={false} required={true}/>
          <FieldPassword {...password} autoFocus={false} required={true}/>
          <Button type="submit" className="w-100 col-6 offset-3">
            Sign in
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
