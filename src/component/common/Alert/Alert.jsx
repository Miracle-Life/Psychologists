import React from 'react';

const Alert = () => {
    return (
        <div className="alert alert-warning alert-dismissible" role="alert">
            <strong>Внимание!</strong> База данных пустая. Заполните ее или обратитесь к
            администратору
            <button type="button" className="btn-close" aria-label="Close"></button>
        </div>
    );
};

export default Alert;
