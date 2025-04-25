import React from "react";
import { useParams } from "react-router-dom";

const Test = ({items}) => {
    const {number} = useParams()

    const data = items.find(item => item.id === Number(number));

    console.log(items);

    return (
      <>
        <p>{data.id}</p>
        <p>{data.name}</p>
        <p>{data.surname}</p>
        <p>{data.email}</p>
        <p>{data.password}</p>
        {/* <p>cc</p> */}
      </>
    );
}

export default Test;