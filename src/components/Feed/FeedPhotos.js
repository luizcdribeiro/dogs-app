import React from 'react';
import FeedPhotosItem from './FeedPhotosItem.js';
import useFetch from '../../hooks/useFetch.js';
import { PHOTOS_GET } from '../../api.js';
import Error from '../helper/Erro.js';
import Loading from '../helper/Loading.js';

import styles from './FeedPhotos.module.css';

const FeedPhotos = () => {
  const { error, loading, data, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
      console.log(json);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map(photo => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  }
  return null;
};

export default FeedPhotos;
