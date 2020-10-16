import React from 'react';
import styles from './PhotoDelete.module.css';
import useFetch from '../../hooks/useFetch.js';
import { PHOTO_DELETE } from '../../api.js';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <>
      {loading ? (
        <button type="button" className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button type="button" className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
