import React, { FormEvent, ReactElement } from 'react';
import { Form, FormProps, reduxForm } from 'redux-form';

import FieldEmail from '../../elements/FieldEmail';
import FieldPassword from '../../elements/FieldPassword';
import { Button, Card } from 'react-bootstrap';
import { loginAction } from '../../../redux/actions/auth';
import { useAppDispatch } from '../../../types/hooks';
import { LoginData } from '../../../types/action';
import { connect, ConnectedComponent } from 'react-redux';
import { AuthStateType } from '../../../redux/reducers/auth';
import { RootState } from '../../../redux/store';
import { Redirect } from 'react-router-dom';
import { useFormInput } from '../../shared/FormInputHook';

interface PropsLogin extends FormProps<any, any> {
  loginAction: typeof loginAction,
  login: AuthStateType
}

function LoginBox (props: PropsLogin): ReactElement {
  const { login } = props;

  const email = useFormInput('');
  const password = useFormInput('');

  const dispatch = useAppDispatch();

  const submit = (values: LoginData, d: typeof dispatch) => {
    return d(loginAction(values));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit({ email: email.value, password: password.value }, dispatch);
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
      {login.authenticated && <Redirect to="/places"/>}
    </Card>
  );
}

const connected: ConnectedComponent<any, any> = connect((state: RootState) => ({ login: state.auth }), { loginAction })(LoginBox);

export default reduxForm({ form: 'auth' })(connected);
