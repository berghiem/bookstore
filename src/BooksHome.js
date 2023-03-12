import { Fetch } from './Fetch';

import { Link, useParams } from 'react-router-dom';
import Slider from "react-slick";

export default function BooksHome({
    genreId,
    genreName

}) {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const params = useParams();
    console.log(`params : ${JSON.stringify(params)}`);
    const url = genreId ?
        `http://localhost:8080/api/books/dash/genre/${genreId.toString()}` :
        `http://localhost:8080/api/books/dash/genre/${params.id.toString()}`;

    const name = genreName ? genreName : params.name.toString();

    console.log(`url : ${url}`);
    return (
        <>

           
            <Fetch
                uri={url}
                renderSuccess={({ data }) => (
                    <div className="mx-4">
                         <p className="titleEditor m-1">{name}</p>
                        <br/>
                        <div className="row row-cols-3 row-cols-md-5 g-3 mx-1 ">
                            {data.map((d, index) => (
                                //pake index
                                <div key={index} className="m-0">
                                    <Link to={`/bookDetail/${d.bookId}`} style={{ textDecoration: 'none' }}>
                                        <div className="col">
                                            <div className="card border-0  justify-content-center">
                                                <img src={require(`${d.picture}`)}  alt="..." className="card-img-top" />
                                                
                                            </div>
                                            <p className="card-text carddesc fs-6">{d.title.substring(0, 30)}<br/>
                                            <span className="text-danger card-text carddesc fs-6 ">Rp 88.000</span> </p>

                                        </div>
                                    </Link>
                                </div>


                            ))
                            }
                        </div>

                    </div>

                )} />

        </>

    );

}