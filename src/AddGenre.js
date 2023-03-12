import { useState } from "react";
import { useParams } from "react-router-dom";
import { Fetch } from "./Fetch";
import { useInput } from "./useinput";


export function AddGenre(){

    const [genre, resetGenre] = useInput(""); 
    const params = useParams(); 
    

    return (
         
                <div className="container mt-3">
                    <div className="row">
                        <h1 className="col">Add Genre</h1>
                    </div>
                    <div className="row">
                        <div className="col mx-1 mx-md-4" >

                            <form   >
                                
                                <div className="row mb-3">
                                    <label className="col-form-label col-md-2" htmlFor="name">Genre</label>
                                    <div className="col">
                                        <input
                                            {...genre}
                                            className="form-control"
                                            type="text"
                                            id="name" />
                                    </div>
                                </div>

                                <div className="d-grid gap-2 col-lg-6 mx-auto  mt-5">
                                    <button type="button" className="btn btn-primary" >Add Genre</button>
                                </div>

                            </form>


                        </div>
                    </div>
                </div>
     );

}




