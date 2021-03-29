import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { Form, FormProps, reduxForm } from 'redux-form';

import FieldEmail from '../../elements/FieldEmail';
import FieldPassword from '../../elements/FieldPassword';
import { Button, Card } from 'react-bootstrap';
import { loginAction } from '../../../redux/actions/auth';
import { useAppDispatch } from '../../../types/hooks';
import { LoginData } from '../../../types/action';
import { connect, ConnectedComponent } from 'react-redux';

interface PropsLogin extends FormProps<any, any> {
  loginAction: typeof loginAction,
}

function LoginBox (props: PropsLogin): ReactElement {

  const email = useFormInput('');
  const password = useFormInput('');

  const dispatch = useAppDispatch();

  const submit = (values: LoginData) => {
    return dispatch(props.loginAction(values));
  };

  const handleSubmit = (e: FormEvent<any>) => {
    submit({ email: email.value, password: password.value });
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

function useFormInput (initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return {
    value, onChange: handleChange
  };
}

const connected: ConnectedComponent<any, any> = connect(null, { loginAction })(LoginBox);

export default reduxForm({ form: 'auth' })(connected);
