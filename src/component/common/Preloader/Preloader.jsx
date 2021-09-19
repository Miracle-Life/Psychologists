import React from 'react';

const Preloader = () => {
    return (
        <div className="d-flex p-3 align-items-center">
            <strong>Loading...</strong>
            <div style={{width: "3rem", height: "3rem"}}
                 className="spinner-grow spinner-grow-sm ms-auto"
                 role="status" aria-hidden="true"/>
        </div>
    );
};

export default Preloader;
