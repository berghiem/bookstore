import { useState } from "react";
import StarRating from "./StarRating";

export function MyChoicesBook() {

    const [title, setTitle] = useState("");
    const [author, setAuhtor] = useState("");
    const [pic, setPic] = useState("");
    const [review, setReview] = useState("");
    return (
        <>
            <ul className="list-group  mt-2">
                
                <li className="list-group-item">
                    <div className="container mt-4 px-4">
                        <div className="row">
                            <div className="col-3  col-lg-1" >
                                <img 
                               // src={require("./lifeOfPi.jpg")}
                                 width="75px" height="100px" />
                            </div>
                            <div className="col mx-3">
                                <div className="d-flex flex-column">
                                    <span className="mb-1"><b>Trending Book Invest Like pro</b></span>
                                    <span className="authorrev mb-1">Mike West</span>
                                    <div><StarRating /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="review text-wrap">Buku ini cukup mudah dipahami untuk orang awam seperti saya, tapi Buku
                                        ini agak pricey. tapi worth it kok
                                    </p>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <p className="reviewed ">Edit
                                    </p>
                                </div>
                                <div className="col-4">
                                    <p className="reviewed ">Delete
                                    </p>
                                </div>                            

                            </div>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="container mt-4 px-4">
                        <div className="row">
                            <div className="col-3  col-lg-1" >
                                <img src={require("./lifeOfPi.jpg")} width="75px" height="100px" />
                            </div>
                            <div className="col mx-3">
                                <div className="d-flex flex-column">
                                    <span className="mb-1"><b>Trending Book Invest Like pro</b></span>
                                    <span className="authorrev mb-1">Mike West</span>
                                    <div><StarRating /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="review text-wrap">Buku ini cukup mudah dipahami untuk orang awam seperti saya, tapi Buku
                                        ini agak pricey. tapi worth it kok
                                    </p>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <p className="reviewed ">Edit
                                    </p>
                                </div>
                                <div className="col-4">
                                    <p className="reviewed ">Delete
                                    </p>
                                </div>                            

                            </div>
                        </div>
                    </div>
                </li>
            </ul>







        </>

    )
}