import React from 'react';

export const Input = ({meta, input, ...props}) => {
    const showError = meta.touched && meta.error
    return (
        <div>
            <input style={props.style}
                   className={`${props.className} ${showError ? ' is-invalid' : ' is-valid'}`}
                   placeholder={props.placeholder}
                   type={props.type}
                   {...input}/>
            {showError && <span className='invalid-feedback'> {meta.error} </span>}

        </div>
    );
};


