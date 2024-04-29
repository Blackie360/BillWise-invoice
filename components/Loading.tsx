import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../public/images/loading.json';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <Lottie animationData={loadingAnimation} style={{ width: 200 }} />
      </div>
    </div>
  );
};

export default Loading;
