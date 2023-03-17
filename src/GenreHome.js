import { Fetch } from './Fetch';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { Link } from 'react-router-dom';

export default function GenreHome() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <span className="titleEditor">Category </span>
            <Fetch
                uri={' http://localhost:8080/api/genre'}
                renderSuccess={({ data }) => (
                    <Slider {...settings} >
                        {data.map((d, index) => (
                            //pake index
                            <div key={index}>

                                <Link to={`/bookGenre/${d.genreId}/${d.name}`}>
                                    <div className="leftm my-3">

                                        {/* {require(`${d.book.picture}`)}
                              // */}      <img 
                                               src={require(`${d.picture}`)} 
                                             //   src={d.picture}                                               
                                                width="65px" height="60px" className="rounded-circle" alt="..." />

                                        <p className="card-text carddesc text-center" > {d.name} </p>
                                    </div>
                                </Link>
                            </div>
                        ))}

                    </Slider>
                )
                } />
        </>

    )


}