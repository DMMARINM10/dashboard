import React from 'react';
import ReactLoading from 'react-loading';

const Loader = () => {
    return (
        <div
            style={{
                height: '630px',
                display: 'flex',
                alignItems: 'center',
                paddingBottom: '100px',
            }}
        >
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
