import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function EditBookForm() {
    const [bookId, setBookId] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");
    const [rangeDate, setRangeDate] = useState("");
    const [discount, setDiscount] = useState("");
    const [isbn, setISBN] = useState("");
    const [description, setDesc] = useState("");
    const [publisher, setpublisher] = useState("");
    const [author, setAuthor] = useState("");
    const [dimension, setdimension] = useState("");
    const [genre, setgenre] = useState("");
    const [genreId, setgenreId] = useState("");
    const [printLength, setPrintLength] = useState("");
    const [publicationDate, setPublicationDate] = useState("");
    const [picture, setPict] = useState("");
    const [language, setlanguage] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('token'));
    const uri = ` http://localhost:8080/api/books/dash/${params.id.toString()}`

    const [data, setData] = useState();
    const [isSuccess, setSuccess] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (!uri) return;
        fetch(uri, {
            method: "GET",
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(data => data.json())
            .then(data => {
                setBookId(data.bookModel.bookId == null ? "" : data.bookModel.bookId);
                setTitle(data.bookModel.title == null ? "" : data.bookModel.title);
                setAuthor(data.bookModel.author == null ? "" : data.bookModel.author);
                setISBN(data.bookModel.isbn == null ? "" : data.bookModel.isbn);
                setDesc(data.bookModel.description == null ? "" : data.bookModel.description);
                setdimension(data.bookModel.dimension == null ? "" : data.bookModel.dimension);
                setlanguage(data.bookModel.language == null ? "" : data.bookModel.language);
                setpublisher(data.bookModel.publisher == null ? "" : data.bookModel.publisher);
                setPrice(data.pricing[0].price == null ? "" : data.pricing[0].price);
                setgenreId(data.bookModel.genreId == null ? "" : data.bookModel.genreId);
                setPublicationDate(data.bookModel.publicationDate == null ? "" : data.bookModel.publicationDate);
                setPrintLength(data.bookModel.printLength == null ? "" : data.bookModel.printLength);
                setPict(data.bookModel.picture == null ? "" : data.bookModel.picture);
                console.log(bookId, title);
            })
            //  .then(() => setLoading(false))
            .catch((
                <pre>eror kenapa</pre>
            ));

        // fetch(uri, {
        //     method: "GET",
        //     headers: { 'Authorization': `Bearer ${token}` }
        // }).then(data => data.json())
        //     .then(data => {
        //         setgenre(data.name);
        //     })
        //     .catch((
        //         <pre>eror genre kenapa</pre>
        //     ));

    }, []);


    const updateBook = async (e) => {
        e.preventDefault();
        console.log("updatebook");
        fetch(" http://localhost:8080/api/books", {
            method: "POST",
            body: JSON.stringify({
                bookId, picture, title, isbn, description,
                publisher, author, printLength, dimension, genreId, publicationDate
            }),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(m => m.json())
            .then(m => {
                //setMessage(JSON.stringify(m));
              //  toast(JSON.stringify(m));
                console.log(`${m}`) 
                navigate("/booklist",{state : {m}})
            })
                       .catch(error => (setMessage(error))
            );

    };

    // const message = () => {
    //     if (isSuccess) {
    //         console.log("berhasil");
    //         return <Success />;
    //     }
    //     console.log("gagal");
    //     return <Fail />;
    // }

    return (

        <>

            <div className="container mt-3">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Edit Book
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="col mx-1 mx-md-4" >

                                        <form onSubmit={updateBook} >
                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="id">Id</label>
                                                <div className="col">
                                                    <input
                                                        value={bookId == null ? "" : bookId}
                                                        onChange={(e) => setBookId(e.target.value)}
                                                        className="form-control"
                                                        type="text"
                                                        id="id"
                                                        disabled />
                                                </div>


                                            </div>
                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="title">Title</label>
                                                <div className="col">
                                                    <input
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)}
                                                        className="form-control"
                                                        type="text"
                                                        id="title" />
                                                </div>


                                            </div>
                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="isbn">ISBN</label>
                                                <div className="col">
                                                    <input
                                                        value={isbn}
                                                        onChange={(e) => setISBN(e.target.value)}
                                                        className="form-control"
                                                        type="text"
                                                        id="isbn" />
                                                </div>
                                            </div>





                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="price">Price</label>
                                                <div className="col">
                                                    <input
                                                        value={price}
                                                        onChange={(e) => setPrice(e.target.value)}
                                                        className="form-control"
                                                        type="number"
                                                        id="price" />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="description">Description</label>
                                                <div className="col">
                                                    <textarea
                                                        value={description}
                                                        onChange={(e) => setDesc(e.target.value)}
                                                        className="form-control"
                                                        type="text"
                                                        id="description" />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="description">Publisher</label>
                                                <div className="col">
                                                    <input
                                                        value={publisher}
                                                        onChange={(e) => setpublisher(e.target.value)}
                                                        className="form-control"
                                                        type="text"
                                                        id="publisher" />
                                                </div>
                                            </div>


                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="author">Author</label>
                                                <div className="col">
                                                    <input
                                                        value={author}
                                                        onChange={(e) => setAuthor(e.target.value)}
                                                        className="form-control"
                                                        type="text"
                                                        id="author" />
                                                </div>
                                            </div>


                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="dimension">Dimension</label>
                                                <div className="col">
                                                    <input
                                                        value={dimension}
                                                        onChange={(e) => setdimension(e.target.value)}
                                                        className="form-control"
                                                        type="text"
                                                        id="dimension" />
                                                </div>
                                            </div>


                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="genre">Genre</label>
                                                <div className="col">
                                                    <select >
                                                        <option value="grapefruit">Grapefruit</option>
                                                        <option value="lime">Lime</option>
                                                        <option value="coconut">Coconut</option>
                                                        <option value="mango">Mango</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="language">Language</label>
                                                <div className="col">
                                                    <input
                                                        value={language}
                                                        onChange={(e) => setlanguage(e.target.value)}
                                                        className="form-control"
                                                        type="text"
                                                        id="language" />
                                                </div>
                                            </div>

                                            <div className="d-grid gap-2 col-lg-6 mx-auto  mt-5">
                                                <button className="btn btn-primary" >Save Book</button>
                                            </div>

                                        </form>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                    Edit  Pricing
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">

                                    <div className="row">
                                        <div className="col mx-1 mx-md-4" >

                                            <form   >
                                                <div className="row mb-3">
                                                    <label className="col-form-label col-md-2" htmlFor="id">Id</label>
                                                    <div className="col">
                                                        <input
                                                            value={data.bookId == null ? "" : data.bookId}
                                                            onChange={(e) => setBookId(e.target.value)}
                                                            className="form-control"
                                                            type="text"
                                                            id="id"
                                                            disabled />
                                                    </div>


                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-form-label col-md-2" htmlFor="price">Price</label>
                                                    <div className="col">
                                                        <input
                                                            // value={data.pricing.price == null ? "" : data.pricing.price}
                                                            // onChange={(e) => setPrice(e.target.value)}
                                                            className="form-control"
                                                            type="number"
                                                            id="price" />
                                                    </div>


                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-form-label col-md-2" htmlFor="isbn">Status</label>
                                                    <div className="col">
                                                        <div className="col">
                                                            <label className="me-2" htmlFor="av">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    id="status"
                                                                    value={"available"}
                                                                    name="av" />
                                                                availble
                                                            </label>

                                                            <label htmlFor="un">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    id="status"
                                                                    name="un"
                                                                    value={"un"} />
                                                                unavailable
                                                            </label>

                                                        </div>
                                                    </div>

                                                </div>





                                                <div className="row mb-3">
                                                    <label className="col-form-label col-md-2" htmlFor="time">Time Range</label>
                                                    <div className="col">
                                                        <input
                                                            onChange={(e) => setRangeDate(e.target.value)}
                                                            type="range" className="form-range"
                                                            id="time"
                                                            min="1"
                                                            max="30"
                                                            step="1" />
                                                    </div>
                                                </div>

                                                <div className="row mb-4">
                                                    <div className="input-group flex-nowrap col-md-4">
                                                        <label className="col-form-label col-md-2" htmlFor="discount">Discount</label>

                                                        <input
                                                            onChange={(e) => setDiscount(e.target.value)}
                                                            className="form-control"
                                                            type="number"
                                                            id="discount" />
                                                        <span className="input-group-text" id="discount">%</span>
                                                    </div>
                                                </div>

                                                <div className="d-grid gap-2 col-lg-6 mx-auto  mt-5">
                                                    <button type="button" className="btn btn-primary" >Save Price</button>
                                                </div>

                                            </form>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                                    Edit  Picture
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">

                                    <div className="row">
                                        <div className="col mx-1 mx-md-4" >

                                            <form   >
                                                <div className="row mb-3">
                                                    <label className="col-form-label col-md-2" htmlFor="id">Id</label>
                                                    <div className="col">
                                                        <input
                                                            value={data.bookId == null ? "" : data.bookId}
                                                            onChange={(e) => setBookId(e.target.value)}
                                                            className="form-control"
                                                            type="text"
                                                            id="id"
                                                            disabled />
                                                    </div>


                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-form-label col-md-2" htmlFor="picture">Picture</label>
                                                    <div className="col">
                                                        <input
                                                            value={data.picture == null ? "" : data.picture}
                                                            onChange={(e) => setPict(e.target.value)}
                                                            className="form-control"
                                                            type="file"
                                                            id="picture" />
                                                    </div>
                                                </div>


                                                <div className="d-grid gap-2 col-lg-6 mx-auto  mt-5">
                                                    <button type="button" className="btn btn-primary" >Save Picture</button>
                                                </div>

                                            </form>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                </div>
            </div>
 

        </>







    );

}

const Success = () => (
    <> <p>Berhasil Update</p></>

);

const Fail = () => (
    <><p>Gagal Update</p>
    </>

);


