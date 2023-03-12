import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fetch } from "./Fetch";
import { Link } from "react-router-dom";
import { AddGenre } from "./AddGenre";

import { AiOutlineEdit } from 'react-icons/ai';
import {MdDeleteOutline} from 'react-icons/md';

export default function GenreList() {


    return (

        <div className="d-flex flex-column mx-3 ">
            <Fetch
                uri={' http://localhost:8080/api/genre'}
                renderSuccess={({ data }) => (
                    <table className="table table-striped col-lg-4">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Genre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((b, index) => (
                                <tr key={index}>
                                    <Genre
                                        id={b.genreId}
                                        name={b.name}
                                        picture={b.picture}
                                    />
                                </tr>
                            ))}

                        </tbody>
                    </table>

                )} />


             <AddGenre />   
        </div>





    );
}

function Genre({

    id,
    name,
    picture
}) {

    return (

        <>
            <td>{id}</td>
            <td>{name}</td>
            <td>

                <Link to={`/editBook/${id}`} >
                   <AiOutlineEdit />
                </Link>



                <Link to={`/editBook/${id}`} 
                    //  onClick={()=>removeBook(id)}                    
                    className="text-danger mx-2 mx-md-4">
                    <MdDeleteOutline/>
                </Link>
            </td>

        </>

    )

}