import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useBooks } from "./BookProvider";
import { Fetch } from "./Fetch";
import { useInput } from "./useinput";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function AddBookForm() {

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
    const [titleProps, resetTitle] = useInput("");
    const [priceProps, resetPrice] = useInput("");
    const [isbnProps, resetISBN] = useInput("");
    const [descProps, resetdesc] = useInput("");
    const [publisherProps, resetpublisher] = useInput("");
    const [authorProps, resetauthor] = useInput("");
    const [dimensionProps, resetdimension] = useInput("");
    const [genreProps, resetgenre] = useInput("");
    const [pictProps, resetPict] = useInput("");
    const [statusProps, resetStatus] = useInput("");
    const [rangeProps, resetRange] = useInput("");
    const [discProps, resetDisc] = useInput("");


    /*  const addBook = (title, price, isbn, desc, publisher, author, dimension, genre, language) =>
          setBooks({
              title: title,
              price: price,
              isbn: isbn,
              description: desc,
              publisher: publisher,
              author: author,
              dimension: dimension,
              genre: genre,
              language: language
  
          });*/

    /*   const submit = event => {
           event.preventDefault();
           fetch('https://jsonplaceholder.typicode.com/posts', {
               method: 'POST',
               headers: {
                   Accept: 'application/json',
                   Authentication: 'Bearer ${token}',
               },
               body: JSON.stringify({
                   title: title .value, 
                   price: price .value, 
                   isbn: isbn .value,
                   description: desc .value,
                   publisher: publisher .value,
                   author: author .value,
                   dimension: dimension .value,
                   genre: genre .value,
                   language: lang .value
               }),
               
            }).then
   
   
   
      //     addBook(title .value, price .value, isbn .value, desc .value, publisher .value, author .value, dimension .value, genre .value, lang .value);
          
          
           setPrice("");
           setTitle("");
      // };*/



    return (
        <div className="container mt-3">
            <div className="row">
                <h1 className="col">Add new book</h1>
                <p>Home &gt;<Link to="/booklist">List Book</Link>  &gt; Add Book</p>
            </div>

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

                                    <form   >
                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="title">Title</label>
                                            <div className="col">
                                                <input
                                                    {...titleProps}
                                                    className="form-control"
                                                    type="text"
                                                    id="title" />
                                            </div>


                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="isbn">ISBN</label>
                                            <div className="col">
                                                <input
                                                    {...isbnProps}
                                                    className="form-control"
                                                    type="text"
                                                    id="isbn" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="description">Description</label>
                                            <div className="col">
                                                <textarea
                                                    {...descProps}
                                                    className="form-control"
                                                    type="text"
                                                    id="description" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="description">Publisher</label>
                                            <div className="col">
                                                <input
                                                    {...publisherProps}
                                                    className="form-control"
                                                    type="text"
                                                    id="publisher" />
                                            </div>
                                        </div>


                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="author">Author</label>
                                            <div className="col">
                                                <input
                                                    {...authorProps}
                                                    className="form-control"
                                                    type="text"
                                                    id="author" />
                                            </div>
                                        </div>


                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="dimension">Dimension</label>
                                            <div className="col">
                                                <input
                                                    {...dimensionProps}
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
                                                    {...genreProps}
                                                    className="form-control"
                                                    type="text"
                                                    id="genre" />
                                            </div>
                                        </div>

                                        <div className="d-grid gap-2 col-lg-6 mx-auto  mt-5">
                                            <button type="button" className="btn btn-primary" >Add Book</button>
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

                                    <form   >
                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="price">Price</label>
                                            <div className="col">
                                                <input
                                                    {...priceProps}
                                                    className="form-control"
                                                    type="number"
                                                    id="price" />
                                            </div>


                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="isbn">Status</label>
                                            <div className="col">
                                                <label className="me-2" htmlFor="av">
                                                    <input
                                                        {...statusProps}
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="status"
                                                        value={"availble"}
                                                        name="av" />
                                                    availble
                                                </label>

                                                <label htmlFor="un">
                                                    <input
                                                        {...statusProps}
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="status"
                                                        name="un" />
                                                    unavailable
                                                </label>

                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="time">Time Range</label>
                                            <div className="col">
                                                <input
                                                    {...rangeProps}
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
                                                    {...discProps}
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
                    <div id="collapseThree" className="accordion-collapse collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                            <div className="row">
                                <div className="col">
                                    <table>
                                        <thead> <tr> <th></th><th></th><th></th> </tr> 
                                        </thead>
                                        <tr>
                                            <td>
                                                <div className="card"  >
                                                    <div className="card-top">
                                                        <img className="img-fluid" src={require("./jagoinggris.jpg")} />
                                                    </div>
                                                    <div className="card-bottom">
                                                        <div className="d-flex justify-content-between">
                                                            <GrEdit /> <RiDeleteBinFill />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="card"  >
                                                    <div className="card-top">
                                                        <img className="img-fluid" src={require("./bukuanak.jpg")} />
                                                    </div>
                                                    <div className="card-bottom">
                                                        <div className="d-flex justify-content-between">
                                                            <GrEdit /> <RiDeleteBinFill />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="card"  >
                                                    <div className="card-top">
                                                        <img className="img-fluid" src={require("./jagoarab.jpg")} />
                                                    </div>
                                                    <div className="card-bottom">
                                                        <div className="d-flex justify-content-between">
                                                            <GrEdit /> <RiDeleteBinFill />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="card"  >
                                                    <div className="card-top">
                                                        <img className="img-fluid" src={require("./jagosains.jpeg")} />
                                                    </div>
                                                    <div className="card-bottom">
                                                        <div className="d-flex justify-content-between">
                                                            <GrEdit /> <RiDeleteBinFill />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mx-1 mx-md-4" >



                                    <form   >
                                        <div className="row mb-3">
                                            <label className="col-form-label col-md-2" htmlFor="picture">Add picture</label>
                                            <div className="col">
                                                <input
                                                    {...pictProps}
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
                </div>
            </div>

        </div>
    );

}




