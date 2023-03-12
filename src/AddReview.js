import { useParams } from "react-router-dom";
import { Fetch } from "./Fetch";

export default function AddReview() {

    const params = useParams();
    // const id = params.id.toString();
    const bookUri = "./booklover.jpg";
    //params.uri.toString();

    return (
        <>
            <div className="m-4">

                <h2>Add Book Review</h2>

                <form>
                    <div className="row mb-3">
                        <Fetch
                            uri={' http://localhost:8080/api/review'}
                            renderSuccess={({ data }) => (
                                <div>  {data.map((d, index) => (
                                    //pake index
                                    <div key={index}>
                                    </div>

                                ))}
                                </div>)}

                        />

                        <div className="col">
                            <div className=" justify-content-center">
                                <img
                                    src={require(`${bookUri}`)}
                                    alt="..." className="w-25 h-auto" />

                            </div>
                        </div>
                        <div className="col">
                            <p>Judul buku</p>
                        </div>
                    </div>
                    <div className="row">
                        <label className="col-form-label col-md-2" htmlFor="language">Your review</label>

                        <div className="col">
                            <textarea
                                //value={data.language == null ? "" : data.language}
                                //onChange={(e) => setlanguage(e.target.value)}
                                className="form-control"
                                id="review" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="d-grid col-5 mx-auto  mt-5">
                            <button type="button" className="btn btn-primary" >Save review</button>
                        </div>
                    </div>




                </form>
            </div>
        </>
    )


}