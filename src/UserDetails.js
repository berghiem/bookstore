import { Fetch } from "./Fetch";
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";

import { AiOutlineEdit } from 'react-icons/ai';
import {MdDeleteOutline} from 'react-icons/md';

export default function UserDetails (
  {
      id,
      picture,
      username,
      name,
      email,
      role,
      joindate
}) {

    return (
     <>
     <td>{id}</td>
      
     <td>{username}</td> 
     <td>{name}</td>
     <td>{email}</td>
     <td>{role}</td>
     <td>{joindate}</td>
     <td>
                
                    <Link to={`/editUser/${id}`}
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