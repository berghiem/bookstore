import userEvent from "@testing-library/user-event";
import React from "react";
import { GrFavorite } from 'react-icons/gr';
import { useInput } from "./useinput";
import { useEffect, useState } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";

import { Fetch } from "./Fetch";
import StarRating from "./StarRating";

export function ViewBookDetail(

) {

    const [author, setAuthor] = useInput("");
    const [printlength, setPrintLength] = useInput("");
    const [publisher, setPublisher] = useInput("");
    const [dimension, setDimension] = useInput("");
    const [language, setLanguage] = useInput("");
    const [publicationDate, setpublicationDate] = useInput("");
    const [title, setTitle] = useInput("");
    const [price, setPrice] = useInput("");
    const [uriPicture, setUriPicture] = useInput("");
    const [description, setDescription] = useInput("");
    const [genre, setGenre] = useInput("");
    const params = useParams();
    const [datax, setData] = useState({
            id: 1,
            title : "Lords of Finance: The Bankers Who Broke the World",
            description : "In Lords of Finance, we meet the neurotic and enigmatic Montagu Norman of the Bank of England, the xenophobic and suspicious Émile Moreau of the Banque de France, the arrogant yet brilliant Hjalmar Sc",
            author : "Helaine Olen ,  Harold Pollack",
            printlength :300,
            publisher : "Gramedia",
            dimension : "20x10x10",
            genre : "finance",
            language : "Indonesia",
            publicationDate : "2022-11-11",
            pricing  : {
                price : 300
            } 

    });
    return (
        <Fetch
             uri={`http://localhost:8080/api/books/dash/${params.id.toString()}`}
           renderSuccess={BookDetail}
        /> 

    );
}

function BookDetail({ data }) {

    return (
        <div className="container mt-3 mt-lg-5 ">
            <div className="d-lg-flex justify-content-center">
                <div className="d-flex flex-column justify-content-center">
                    <div>
                    <img 
                    //src={require(`${data.bookModel.picture}`)}
                    
                    src={data.bookModel.picture}
                     className="bookDetailpic" />
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <GrFavorite size={18} className="mt-1" />&nbsp;1000 favorit

                    </div>
                </div>
                <div className="container ms-lg-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="text-capitalize">{data.bookModel.author}</p>
                            <p className="fs-4 text-capitalize">{data.bookModel.title}</p>
                            <p className="fw-bold">Deskripsi</p>
                            <p className="fw-normal">{data.bookModel.description}</p>
                            <p className="fw-normal">Rp. </p>
                        </div>
                    </div>
                    <div className="row"> 
                             
                        <div className="col "> 
                            <Link to="/addreview"  className="btn btn-primary mb-3 px-4">Rate and review</Link>                             
                        </div>
                        <div className="col" > 
                            <button type="button" className="btn btn-primary mb-3 px-4">Buy book</button>                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-lg-3">
                            <p className="viewbookdetail">Halaman</p>
                            <p className="viewbookdetailContent">{data.bookModel.printLength}</p>
                        </div>
                        <div className="col col-lg-3">
                            <p className="viewbookdetail">Penerbit</p>
                            <p className="viewbookdetailContent">{data.bookModel.publisher}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-3">
                            <p className="viewbookdetail">Dimension</p>
                            <p className="viewbookdetailContent">{data.bookModel.dimension}</p>
                        </div>
                        <div className="col col-lg-3">
                            <p className="viewbookdetail">Genre</p>
                            <p className="viewbookdetailContent">{data.bookModel.genre}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-3">
                            <p className="viewbookdetail">Bahasa</p>
                            <p className="viewbookdetailContent">{data.bookModel.language}</p>
                        </div>
                        <div className="col col-lg-3">
                            <p className="viewbookdetail">Tanggal terbit</p>
                            <p className="viewbookdetailContent">{data.bookModel.publicationDate}</p>
                        </div>

                    </div>
                </div>
                <div className="container mt-4 px-4">
                    <div className="row">
                        <div className="col-3  col-lg-1" >
                            <img 
                           // src={require("./lifeOfPi.jpg")}
                             width="75px" height="100px" />
                        </div>
                        <div className="col">
                            <div className="d-flex flex-column">
                                <span className="mb-1"><b>Trending Book Invest Like pro</b></span>
                                <span className="authorrev mb-1">Mike West</span>
                                <div><StarRating /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}












