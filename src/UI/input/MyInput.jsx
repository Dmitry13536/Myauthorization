import React from "react";
import styles from './input.module.scss';

const MyInput = ({alertText='', className, ...props}) => {
    return (
      <>
        <input required min={1} {...props} className={`${className} ${styles.input}`} />
        {alertText && <p>{alertText}</p>}
      </>
    );
}

export default MyInput;