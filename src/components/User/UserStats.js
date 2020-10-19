import React from 'react';
import Head from '../helper/Head.js';
import useFetch from '../../hooks/useFetch.js';
import { STATS_GET } from '../../api.js';
import Loading from '../helper/Loading.js';
import Error from '../helper/Erro.js';

const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs.js'))

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  if (data) {
    return (
      <React.Suspense fallback={<Loading />}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  }

  return null;
};

export default UserStats;
