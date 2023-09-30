import React from 'react';
import { LineWave } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <LineWave
        height="70"
        width="100"
        color="#090a09"
        ariaLabel="line-wave"
        wrapperStyle={{
          padding: '0',
          marginLeft: '100px',
        }}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};
