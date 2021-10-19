import React from 'react';
// import {useForm} from "react-hook-form";

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


// export function Inputs({register, name, ...rest}) {
//     return <input {...register(name)} {...rest} />;
// }
//
//
// export function Select({register, options, name, ...rest}) {
//     return (
//         <select {...register(name)} {...rest}>
//             {options.map(value => (
//                 <option key={value} value={value}>
//                     {value}
//                 </option>
//             ))}
//         </select>
//     );
// }

