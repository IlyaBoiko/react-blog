import React from 'react';
import css from './Button.module.css';

export const Button = ({children, onClick}) => {
    console.log(css)
    return (
        <button onClick={onClick} className={css.button} type="button">{children}</button>
    )
}