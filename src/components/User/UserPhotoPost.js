import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UserPhotoPost.module.css';
import Input from '../Forms/Input.js';
import Button from '../Forms/Button.js';
import useForm from '../../hooks/useForm.js';
import useFetch from '../../hooks/useFetch.js';
import Error from '../helper/Erro.js';
import { PHOTO_POST } from '../../api.js';
import Head from '../helper/Head.js';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');

  const [img, setImg] = React.useState({});

  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');

    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Nome" name="nome" {...nome} />
        <Input type="text" label="Peso" name="peso" {...peso} />
        <Input type="text" label="Idade" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview})` }}
          />
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
