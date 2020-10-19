import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch.js';
import { PHOTO_GET } from '../../api.js';
import Error from '../helper/Erro.js';
import Loading from '../helper/Loading.js';
import PhotoContent from './PhotoContent.js';
import Head from '../helper/Head.js';

const Photo = () => {
  const { id } = useParams();

  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);

    request(url, options);
  }, [request, id]);

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (data) {
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single data={data} />
      </section>
    );
  }
  return null;
};

export default Photo;
