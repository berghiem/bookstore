import userEvent from "@testing-library/user-event";
import React from "react";
import { GrFavorite } from 'react-icons/gr';
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { Fetch } from "./Fetch";
import StarRating from "./StarRating";

export function ViewBookDetail(

) {

    const [author, setAuthor] = useState("");
    const [printlength, setPrintLength] = useState("");
    const [publisher, setPublisher] = useState("");
    const [dimension, setDimension] = useState("");
    const [language, setLanguage] = useState("");
    const [publicationDate, setpublicationDate] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [uriPicture, setUriPicture] = useState("");
    const [description, setDescription] = useState("");
    const [genre, setGenre] = useState("");
    const [genreId, setGenreId] = useState("");
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [reviews, setReviews] = useState([]);

    const params = useParams();

    useEffect(() => {
        if (params) {

            //GET USER
            const uri = `http://localhost:8080/api/books/dash/${params.id.toString()}`
            fetch(uri, {
                method: "GET",
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(data => data.json())
                .then(data => {
                    setAuthor(data.bookModel.author == null ? "" : data.bookModel.author);
                    setTitle(data.bookModel.title == null ? "" : data.bookModel.title);
                    setDescription(data.bookModel.description == null ? "" : data.bookModel.description);
                    setPublisher(data.bookModel.publisher == null ? "" : data.bookModel.publisher);
                    setPrintLength(data.bookModel.printLength == null ? "" : data.bookModel.printLength);
                    setDimension(data.bookModel.dimension == null ? "" : data.bookModel.dimension);
                    setGenreId(data.bookModel.genreId == null ? "" : data.bookModel.genreId);
                    setLanguage(data.bookModel.language == null ? "" : data.bookModel.language);
                    setUriPicture(data.bookModel.picture == null ? "" : data.bookModel.picture);
                    setpublicationDate(data.bookModel.publicationDate == null ? "" : data.bookModel.publicationDate);

                    switch (data.bookModel.genreId) {
                        case 1: setGenre("Chicklit")
                            break;
                        case 2: setGenre("Psikologi")
                            break;
                        case 3: setGenre("Finance")
                            break;

                        case 4: setGenre("Education")
                            break;
                        case 5: setGenre("Self Development")
                            break;
                        case 6: setGenre("Health")
                            break;
                        case 7: setGenre("Religion")
                            break;

                    }

                    console.log(` view book detail genre ${genre}`);

                })
                .catch((
                    <pre>eror kenapa</pre>
                ));

            const uriRate = `http://localhost:8080/api/review/book/${params.id.toString()}`
            fetch(uriRate, {
                method: "GET",
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(data => data.json())
                .then(data => setReviews(data))
                .catch((
                    <pre>eror kenapa</pre>
                ));

        }

    }, [])


    return (
        <div className="container mt-3 mt-lg-5 ">
            <div className="d-lg-flex justify-content-center">
                <div className="d-flex flex-column justify-content-center">
                    <div style={{ maxHeight: 300 }}>
                        <img
                            //src={require(`${data.bookModel.picture}`)}

                            src={uriPicture}
                            className="bookDetailpic" />
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <GrFavorite size={18} className="mt-1" />&nbsp;1000 favorit

                    </div>
                </div>
                <div className="container ms-lg-5">
                    <div className="row">
                        <div className="col">
                            <p className="text-capitalize">{author}</p>
                            <p className="fs-4 text-capitalize">{title}</p>
                            <p className="fw-bold">Deskripsi</p>
                            <p className="fw-normal">{description}</p>
                            <p className="fw-normal">Rp. </p>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col ">
                            <Link to="/addreview" className="btn btn-primary mb-3 px-4">Rate and review</Link>
                        </div>
                        <div className="col" >
                            <button type="button" className="btn btn-primary mb-3 px-4">Buy book</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col ">
                            <p className="viewbookdetail">Halaman</p>
                            <p className="viewbookdetailContent">{printlength}</p>
                        </div>
                        <div className="col ">
                            <p className="viewbookdetail">Penerbit</p>
                            <p className="viewbookdetailContent">{publisher}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="viewbookdetail">Dimension</p>
                            <p className="viewbookdetailContent">{dimension}</p>
                        </div>
                        <div className="col ">
                            <p className="viewbookdetail">Genre</p>
                            <p className="viewbookdetailContent">{genre}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col ">
                            <p className="viewbookdetail">Bahasa</p>
                            <p className="viewbookdetailContent">{language}</p>
                        </div>
                        <div className="col ">
                            <p className="viewbookdetail">Tanggal terbit</p>
                            <p className="viewbookdetailContent">{publicationDate}</p>
                        </div>

                    </div>

                    <div className="row">

                        {reviews != null && 
                            reviews.map((b, index) => (
                                <div key={b}>
                                    <div className="col-3  col-lg-1" >
                                        <img
                                            // src={require("./lifeOfPi.jpg")}
                                            width="75px" height="100px" />
                                    </div>
                                    <div className="col">
                                        <div className="d-flex flex-column">
                                            <div><StarRating /></div>
                                            <span className="mb-1">{b.review}
                                            </span>
                                            <span className="authorrev mb-1">{b.userId}</span>

                                        </div>
                                    </div>
                                </div>

                            ))
                        
                        }





                    </div>
                </div>
            </div>
        </div>

    );
}












