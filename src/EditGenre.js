import { useState } from "react";
import { useParams } from "react-router-dom";
import { Fetch } from "./Fetch";


export function EditGenre(){

    const [genre, setGenre] = useState(""); 
    const params = useParams(); 
    

    return (
        <Fetch
            uri={`http://localhost:8080/books/1`}
            renderSuccess={({ data }) => (
                <div className="container mt-3">
                    <div className="row">
                        <h1 className="col">Edit Genre</h1>
                    </div>
                    <div className="row">
                        <div className="col mx-1 mx-md-4" >

                            <form   >
                                <div className="row mb-3">
                                    <label className="col-form-label col-md-2" htmlFor="Id">Id</label>
                                    <div className="col">
                                        <input
                                            value={data.bookId} 
                                            className="form-control"
                                            type="text"
                                            id="id" 
                                            disabled/>
                                    </div>


                                </div>
                                <div className="row mb-3">
                                    <label className="col-form-label col-md-2" htmlFor="name">Genre</label>
                                    <div className="col">
                                        <input
                                            value={data.title ==null ? "" : data.title}
                                            onChange={(e) => setGenre(e.target.value)}
                                            className="form-control"
                                            type="text"
                                            id="name" />
                                    </div>
                                </div>






                                <div className="d-grid gap-2 col-lg-6 mx-auto  mt-5">
                                    <button type="button" className="btn btn-primary" >Edit Genre</button>
                                </div>

                            </form>


                        </div>
                    </div>
                </div>
            )}

        />







    );

}




