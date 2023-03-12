import React from "react";
import Book from "./Book";
import { useBooks } from "./BookProvider";
import { Fetch } from "./Fetch";
import { BsSearch } from 'react-icons/bs';
import { Link } from "react-router-dom";

export default function Booklist(

) {

    return (

        <>
            <div className="row  m-4">
                <h2>All Book</h2>
                <p>Home &gt; All Book</p>
            </div>
            <div className=" d-flex p-3">
                <div> <Link to="/addBook" class="btn btn-primary px-3">Add Book</Link>
                </div>
                <div className="flex-grow-1">
                    {/* Search Form */}
                    <form className='form fs-search'>
                        <div className="input-group mb-3">
                            <span className="input-group-text rounded-circle searchicon" id="basic-addon1"><BsSearch /></span>
                            <input type="text" className="form-control rounded-pill isearch" placeholder="Find book" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <i className="glyphicon glyphicon-user"></i>
                    </form>
                </div>
            </div>


            <Fetch
                uri={' http://localhost:8080/api/books/dash'}
                renderSuccess={({ data }) => (
                    <table className="table table-striped">
                        <thead>
                            <tr><th>id</th>
                                <th>Picture</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((b, index) => (
                                <tr key={index}>
                                    <Book
                                        id={b.bookModel.bookId}
                                        title={b.bookModel.title}
                                        author={b.bookModel.author}
                                        picture={b.bookModel.picture}
                                        publisher={b.bookModel.publisher}
                                        price={b.pricing[0].price}
                                    />
                                </tr>
                            ))}

                        </tbody>
                    </table>

                )} />
        </>


    );
}