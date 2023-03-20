import React from 'react';
import ReactLoading from 'react-loading';

const Loader = () => {
    return (
        <div className="loader">
            <ReactLoading
                type={'bars'}
                color={'black'}
                height={50}
                width={80}
            />
        </div>
    );
};

export default Loader;
