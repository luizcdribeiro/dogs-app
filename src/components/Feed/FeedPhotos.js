import React from 'react';
import FeedPhotosItem from './FeedPhotosItem.js';
import useFetch from '../../hooks/useFetch.js';
import { PHOTOS_GET } from '../../api.js';
import Error from '../helper/Erro.js';
import Loading from '../helper/Loading.js';

import styles from './FeedPhotos.module.css';

const FeedPhotos = ({ setModalPhoto, user, page, setInfinite }) => {
  const { error, loading, data, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { json, response } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }

    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map(photo => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  }
  return null;
};

export default FeedPhotos;
