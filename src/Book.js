import React from "react";
import { Link } from "react-router-dom";
import { useBooks } from "./BookProvider";

import { AiOutlineEdit } from 'react-icons/ai';
import {MdDeleteOutline} from 'react-icons/md';

export default function Book(
    {
        id,
        title,
        price,
        author,
        picture,
        publisher,
       
    }) {

    //  const {removeBook} = useBooks();
console.log(`auhtor ${author}`);
    return (
        <>
            <td>{id}</td>
            <td>  <img src={require(`${picture}`)} width="75px" height="100px" alt="..." className="rounded"/></td>
            <td>{title} <p className="text-success">{author}</p><p>{publisher}</p></td>
            <td>{price}</td>
            <td>
                
                    <Link to={`/editBook/${id}`}
                        // onClick={()=>editBook(id)}
                       //  className="btn btn-primary btn-sm   "
                         >
                        <AiOutlineEdit />
                    </Link>
                


                <Link to={`/editBook/${id}`}
                    //  onClick={()=>removeBook(id)}
                      className="text-danger mx-2 mx-md-4"
                      >
                    <MdDeleteOutline/>
                </Link>
            </td>

        </>

    );

}