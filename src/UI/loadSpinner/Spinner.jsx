import spinner from "../../assets/spinner.svg";
import React from "react";
import styles from './Spinner.module.css'

const Spinner = ({active=false}) => {
    if (active) return(
        <img src={spinner} alt="aa" className={styles.spinner}/>
    )
    return null;
}

export default Spinner;