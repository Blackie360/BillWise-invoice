import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../public/images/loading.json';


const Loading = () => {
  return (
    <div >
    <Lottie animationData={loadingAnimation} style={{ width: 200 }} />
  </div>
  );
};

export default Loading;
