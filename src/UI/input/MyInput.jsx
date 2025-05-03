import React, { useRef } from "react";
import clsx from "clsx";
import styles from './input.module.scss';

const MyInput = ({value='', className=null, cond=false, ...props}) => {
  const inputRef = useRef(null);

  const classInput = clsx([styles.input], {
    className : className !== null,
    [styles.green]: !cond && value.length >= 2,
    [styles.red]: cond,
  });

    return (
      <>
        <input ref={inputRef} required min={1} {...props} className={classInput} />
        {/* {alertText && <p>{alertText}</p>} */}
      </>
    );
}

export default MyInput;