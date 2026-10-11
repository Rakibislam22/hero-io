import React, { Suspense } from 'react';
import AllApps from './AllApps';
import Loading from './Loading';

const FetchingData = () => {
  const dataPromise = fetch('https://raw.githubusercontent.com/Rakibislam22/hero-io/refs/heads/main/public/allData.json')
    .then(res => res.json())
    .then(data => {
      return new Promise(resolve => setTimeout(() => resolve(data), 50));
    });

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <AllApps dataPromise={dataPromise} />
      </Suspense>
    </div>
  );
};

export default FetchingData;
