
import { Fetch } from './Fetch';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { useEffect } from 'react';

function EditorsChoiceBooks(
) {


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (

    <><div className="banner">
      <p className="banner-top"></p>
      <div className="editor">

        {/* Search Form */}
        <form className='form fs-search'>
          <div className="input-group mb-3">
            <span className="input-group-text rounded-circle searchicon" id="basic-addon1"><BsSearch /></span>
            <input type="text" className="form-control rounded-pill isearch" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <i className="glyphicon glyphicon-user"></i>
        </form>


        <span className="titleEditor">Editor's Choice </span>
        <span className='editordate'>February 2023</span>



        <Fetch
          // http://localhost:8080/api/books/dash/recomend
          uri={'http://localhost:8080/api/books/dash/recomend'}
          renderSuccess={({ data }) => (
            <Slider {...settings} >
              {data.map((d, index) => (
                //pake index
                <div key={index}>

                  <Link to={`/bookDetail/${d.book.bookId}`} style={{ textDecoration: 'none' }}>

                    <div className="card mt-3 mb-3 shadow-sm cardmx"  >
                      <div className="d-flex g-0 ">
                        <div className="flex p-0 m-2">
                          <img 
                         //src={require(`${d.book.picture}`)}
                         src={d.book.picture}
                          width="75px" height="100px" alt="..." />
                        </div>
                        <div className="flex-fill">
                          <div className="card-body p-0 m-2">
                            <p className="card-text carddesc" > {d.book.description.substring(0, 70)} </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>



                </div>
              ))}

            </Slider>
          )} />




      </div>
    </div>



    </>
  );
};


export default EditorsChoiceBooks;