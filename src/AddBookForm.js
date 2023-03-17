import React, { createRef, useRef, useState } from "react";

import { useParams, Navigate, useNavigate } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ToastContainer, toast } from 'react-toastify';

function AddBookForm() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");
    const [bookId, setBookId] = useState("");
    const [price, setPrice] = useState("");
    const [isbn, setISBN] = useState("");
    const [description, setdesc] = useState("");
    const [publisher, setpublisher] = useState("");
    const [author, setauthor] = useState("");
    const [dimension, setdimension] = useState("");
    const [genreId, setgenre] = useState(1);
    const [printLength, setPrintLength] = useState("");
    const [publicationDate, setPublicationDate] = useState("");
    const [language, setlanguage] = useState("");
    const [picture, setPict] = useState();
    const [status, setStatus] = useState(0);
    const [timeRange, setRange] = useState("");
    const [discount, setDisc] = useState("");
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false); 
    const fileInput = useRef();

    const handleChange1 = () => {
        setChecked1(!checked1);
        setChecked2(false);
        setStatus(1)
    }

    const handleChange2 = () => {
        setChecked2(!checked2);
        setChecked1(false);
        setStatus(0)
    }


    (() => {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
      
            form.classList.add('was-validated')
          }, false)
        })
      })()

    const submitBook = async (e) => {
        e.preventDefault();
        setBookId(0)
        fetch(" http://localhost:8080/api/books", {
            method: "POST",
            body: JSON.stringify({
                bookId, picture, title, isbn, description,
                publisher, author, printLength, dimension,
                language, genreId, publicationDate
            }),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(m => m.json())
            .then(m => {
                //setMessage(JSON.stringify(m));

                toast(JSON.stringify(m));
                console.log(`${m}`)
                //  navigate("/booklist", { state: { m } })
            })
            .catch(error => (setMessage(error))
            );
    }

    const submitPrice = async (e) => {
        e.preventDefault();

        //TO DO diganti
        setBookId(17)
        setRange("")

        fetch(" http://localhost:8080/api/price", {
            method: "POST",
            body: JSON.stringify({
                bookId, price, status, discount, timeRange
            }),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(m => m.json())
            .then(m => {
                console.log(`${m}`)
                toast(JSON.stringify(m));
                // navigate("/booklist", { state: { m } })
            })
            .catch(error => (setMessage(error))
            );
    }


    const submitPicture = async (e) => {

        e.preventDefault();
        console.log(`file input ${fileInput.current.files[0].name}`)
        console.log(`picture : ${JSON.stringify(picture)}`)
        //TO DO diganti
        setBookId(21);

        const data = new FormData();
        data.append("image", fileInput.current.files[0]);

        fetch(`http://localhost:8080/api/books/uploadImage/2`, {
            method: "POST",
            body: data,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(m => m.json())
            .then(m => {
                console.log(`${m}`)
                toast(JSON.stringify(m));
                // navigate("/booklist", { state: { m } })
            })
            .catch(error => (setMessage(error))
            );
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <h1 className="col">Add new book</h1>
                <p>Home &gt;<Link to="/booklist">List Book</Link>  &gt; Add Book</p>
            </div>
            <ToastContainer />
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Add Book
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="row">

                                <div className="col mx-1 mx-md-4" >
                                <form className=" needs-validation" onSubmit={submitBook} noValidate>
                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="title">Title</label>
                                            <div className="col">
                                                <input
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    className="form-control"
                                                    type="text"
                                                    id="title"
                                                    required />
                                                <div className="invalid-feedback">
                                                    Please provide a valid title
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <label htmlFor="validationCustom05" className="form-label">Zip</label>
                                                <input type="text" className="form-control" id="validationCustom05" required />
                                                    <div className="invalid-feedback">
                                                        Please provide a valid zip.
                                                    </div>
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
                                                    id="isbn"
                                                    required />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="description">Description</label>
                                            <div className="col">
                                                <textarea
                                                    value={description}
                                                    onChange={(e) => setdesc(e.target.value)}
                                                    className="form-control"
                                                    type="text"
                                                    id="description"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="publisher">Publisher</label>
                                            <div className="col">
                                                <input
                                                    value={publisher}
                                                    onChange={(e) => setpublisher(e.target.value)}
                                                    className="form-control"
                                                    type="text"
                                                    id="publisher"
                                                    required />
                                            </div>
                                        </div>


                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="author">Author</label>
                                            <div className="col">
                                                <input
                                                    value={author}
                                                    onChange={(e) => setauthor(e.target.value)}
                                                    className="form-control"
                                                    type="text"
                                                    id="author"
                                                    required />
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
                                                    id="dimension"
                                                    required />
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
                                                    id="genre"
                                                    required />
                                            </div>
                                        </div>

                                        <div className="d-grid gap-2 col-lg-6 mx-auto  mt-5">
                                            <button className="btn btn-primary" >Add Book</button>
                                        </div>

                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                            Add  Pricing
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                            <div className="row">
                                <div className="col mx-1 mx-md-4" >

                                    <form onSubmit={submitPrice}   >
                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="price">Price</label>
                                            <div className="col">
                                                <input
                                                    value={price}
                                                    onChange={(e) => setPrice(e.target.value)}
                                                    className="form-control"
                                                    type="number"
                                                    id="price"
                                                    required />
                                            </div>


                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="isbn">Status</label>
                                            <div className="col">

                                                <RadioBtn
                                                    label={"available"}
                                                    value={checked1}
                                                    onChange={handleChange1}
                                                />
                                                <RadioBtn
                                                    label={"unavailable"}
                                                    value={checked2}
                                                    onChange={handleChange2}
                                                />



                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="time">Time Range</label>
                                            <div className="col">
                                                <input
                                                    value={timeRange}
                                                    onChange={(e) => setRange(e.target.value)}
                                                    type="range" className="form-range"
                                                    id="time"
                                                    min="1"
                                                    max="30"
                                                    step="1"
                                                    required />
                                            </div>
                                        </div>

                                        <div className="row mb-4">
                                            <div className="input-group flex-nowrap col-md-4">
                                                <label className="col-form-label col-md-2" htmlFor="discount">Discount</label>

                                                <input
                                                    value={discount}
                                                    onChange={(e) => setDisc(e.target.value)}
                                                    className="form-control"
                                                    type="number"
                                                    id="discount"
                                                />
                                                <span className="input-group-text" id="discount">%</span>
                                            </div>
                                        </div>

                                        <div className="d-grid gap-2 col-lg-6 mx-auto  mt-5">
                                            <button className="btn btn-primary" >Save Price</button>
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
                            Add Picture
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                            <div className="row">
                                <div className="col mx-1 mx-md-4" >

                                    <form onSubmit={submitPicture}>
                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="picture">Add picture</label>
                                            <div className="col">
                                                <input
                                                    ref={fileInput}
                                                    // onChange={(e) => setPict(e.target.files[0])}
                                                    className="form-control"
                                                    type="file"
                                                    id="picture" />
                                            </div>
                                        </div>


                                        <div className="d-grid gap-2 col-lg-6 mx-auto  mt-5">
                                            <button className="btn btn-primary" >Save Picture</button>
                                        </div>

                                    </form>
                                    {message}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

};

const RadioBtn = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="radio" checked={value} onChange={onChange} />
            {label}
        </label>
    )
}

export default AddBookForm;




