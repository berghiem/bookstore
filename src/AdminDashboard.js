import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {

    const [countUser, setCountUser] = useState("");
    const [countBook, setCountBook] = useState("");
    const [countGenre, setCountGenre] = useState("");
    const countBookUri = "";
    const countUserUri = "";
    const countGenreUri = "";

    // useEffect(() => {

    //     //Get Count Book
    //     fetch(countBookUri, {
    //         method: "GET",
    //         headers: { 'Authorization': `Bearer ${token}` }
    //     })
    //         .then(data => data.json())
    //         .then(data => {
    //             //  setCountBook();                 

    //         })
    //         .catch((
    //             <pre>eror kenapa</pre>
    //         ));

    //     //Get Count User
    //     fetch(countUserUri, {
    //         method: "GET",
    //         headers: { 'Authorization': `Bearer ${token}` }
    //     })
    //         .then(data => data.json())
    //         .then(data => {
    //             //  setCountBook();                 

    //         })
    //         .catch((
    //             <pre>eror kenapa</pre>
    //         ));

    //     // Get Count Genre        
    //     fetch(countGenreUri, {
    //         method: "GET",
    //         headers: { 'Authorization': `Bearer ${token}` }
    //     })
    //         .then(data => data.json())
    //         .then(data => {
    //             //  setCountBook();                 

    //         })
    //         .catch((
    //             <pre>eror kenapa</pre>
    //         ));

    // }, []);

    return (
        <>

            <div className='m-4 container'>
                <div className='row'>
                    <div className='col-2 col-md-1'>
                        <img src={require('./user5.jpg')}
                            width="60px" height="60px" className="rounded-circle shadow" alt="..." />
                    </div>
                    <div className='col ms-1'>
                        <h4>Admin</h4>
                        <span>Welcome back <b>Ruby</b> !</span>
                    </div>
                </div>
            </div>

            {/* User Management */}
            <div className='mx-4'>
                <Link to="/userlist" className='text-decoration-none text-dark'>
                    <div className='shadow p-3  my-5 rounded-3 container '>
                        <div className='row'>
                            <div className='col-4 col-md-2 col-lg-2  col-xl-1 col-xxl-1 me-2  me-xxl-4 position-relative'>

                                <img src={require('./user1.jpg')}
                                    width="60px" height="60px" className="rounded-circle  border-white border border-2 shadow-sm z-1 position-absolute ms-1" alt="..." />
                                <img src={require('./user2.jpg')}
                                    width="60px" height="60px" className="rounded-circle shadow-sm z-2 border border-white border-2 position-absolute ms-3" alt="..." />
                                <img src={require('./user3.jpg')}
                                    width="60px" height="60px" className="rounded-circle shadow-sm z-3 border border-white border-2 position-absolute ms-5" alt="..." />
                            </div>
                            <div className='col'>
                                <span className='text-primary'>New user</span>
                                <p>150</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>


            {/* Book  Management */}
            <div className='mx-4'>

                <Link to="/booklist" className='text-decoration-none text-dark'>
                    <div className='shadow p-3  my-5 rounded-3 container '>
                        <div className='row' style={{ height: '100px' }} >
                            <div className='col-4 col-md-2 col-lg-2  col-xl-1 col-xxl-1 me-2  me-xxl-4 position-relative'>

                                <img src={require('./booklover.jpg')}
                                    width="60px" height="auto" className="rounded-3  border border-2 shadow-sm z-1 position-absolute ms-1" alt="..." />
                                <img src={require('./idcard.jpg')}
                                    width="60px" height="auto" className="rounded-3  border border-2 shadow-sm z-2 position-absolute ms-3" alt="..." />
                                <img src={require('./finance.jpg')}
                                    width="60px" height="auto" className="rounded-3  border border-2  shadow-sm z-3 position-absolute ms-5" alt="..." />

                            </div>
                            <div className='col'>
                                <span className='text-primary'>New Book</span>
                                <p>80</p>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col'>
                                <span className='rounded-pill p-1' style={{ backgroundColor: 'pink' }}>Self Help</span>
                                <p className='p-1'>30</p>
                            </div>
                            <div className='col'>
                                <span className='rounded-pill p-1' style={{ backgroundColor: 'lightgreen' }}>Education</span>
                                <p className='p-1'>20</p>
                            </div>
                            <div className='col'>
                                <span className='rounded-pill p-1' style={{ backgroundColor: 'lightpurple' }}>Language</span>
                                <p className='p-1'>10</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Genre Management */}
            <div className='mx-4'>
                <Link to="/genrelist" className='text-decoration-none text-dark'>

                    <div className='shadow p-3  my-5 rounded-3 container '>
                        <div className='row'>
                            <div className='col-4 col-md-2 col-lg-2  col-xl-1 col-xxl-1 me-2  me-xxl-4 position-relative'>
                                <img src={require('./c1.jpg')}
                                    width="60px" height="60px" className="rounded-circle  border-white border border-2 shadow-sm z-1 position-absolute ms-1" alt="..." />
                                <img src={require('./c2.jpg')}
                                    width="60px" height="60px" className="rounded-circle shadow-sm z-2 border border-white border-2 position-absolute ms-3" alt="..." />
                                <img src={require('./c3.jpg')}
                                    width="60px" height="60px" className="rounded-circle shadow-sm z-3 border border-white border-2 position-absolute ms-5" alt="..." />
                            </div>
                            <div className='col'>
                                <span className='text-primary'>Genre</span>
                                <p>20</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )

}