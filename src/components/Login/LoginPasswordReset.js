import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Forms/Input.js';
import Button from '../Forms/Button.js';
import useForm from '../../hooks/useForm.js';
import useFetch from '../../hooks/useFetch.js';
import { PASSWORD_RESET } from '../../api.js';
import Error from '../helper/Erro.js';
import Head from '../helper/Head.js';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');

  const password = useForm();

  const { error, loading, request } = useFetch();

  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);
      if (response.ok) {
        navigate('/login');
      }
    }
  }

  return (
    <div>
      <Head title="Resete sua senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? <Button>Resetando...</Button> : <Button>Resetar</Button>}
      </form>

      <Error error={error} />
    </div>
  );
};

export default LoginPasswordReset;
