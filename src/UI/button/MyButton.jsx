import React from "react";
import styles from './MyButton.module.scss';

const MyButton = ({children, className='', colors=false, ...props}) => {
    return (
      <button
        className={
          colors
            ? `${className} ${styles.button}`
            : `${className} ${styles.button} ${styles.colors} `
        }
        {...props}
      >
        {children}
      </button>
    );
}

export default MyButton;