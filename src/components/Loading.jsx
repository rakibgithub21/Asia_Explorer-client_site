import React from 'react';

const Loading = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center">
            <div className="flex items-center">
                <span className="loading text-rose-600 loading-bars loading-sm"></span>
                <span className="loading text-red-600 loading-bars loading-xs"></span>
                <span className="loading text-purple-600 loading-bars loading-lg"></span>
                <span className="loading text-orange-600 loading-bars loading-md"></span>
                <span className="loading text-yellow-600 loading-bars loading-sm"></span>
                <span className="loading text-red-600 loading-bars loading-xs"></span>
                <span className="loading text-blue-600 loading-bars loading-lg"></span>
                <span className="loading text-black loading-bars loading-md"></span>
            </div>
        </div>
    );
};

export default Loading;