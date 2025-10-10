import React, { Suspense } from 'react';
import AllApps from './AllApps';
import Loading from './Loading';

const FetchingData = () => {
  const dataPromise = fetch('/allData.json')
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
