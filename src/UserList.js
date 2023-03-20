import React from "react";
import Book from "./Book";
import { useBooks } from "./BookProvider";
import { Fetch } from "./Fetch";
import { BsSearch } from 'react-icons/bs';
import { Link } from "react-router-dom";
import UserDetails from "./UserDetails";
import { FetchHeader } from "./FetchHeader";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function UserList() {

    var { state } = useLocation();

    if (state) {
        console.log(`uselocation : ${JSON.stringify(state)}`)
        var { m } = state;
        console.log(`m : ${JSON.stringify(m)}`)
        var { message } = m;
        console.log(`message : ${JSON.stringify(message)}`)
        toast(message)
    }

    return (

        <>
            <ToastContainer />
            <div className="row  m-4">
                <h2>All User</h2>
                <p>Home &gt; All User</p>
            </div>
            <div className=" d-flex p-3">
                <div> <Link to="/addBook" className="btn btn-primary px-3">Add User</Link>
                </div>
                <div className="flex-grow-1">
                    {/* Search Form */}
                    <form className='form fs-search'>
                        <div className="input-group mb-3">
                            <span className="input-group-text rounded-circle searchicon" id="basic-addon1"><BsSearch /></span>
                            <input type="text" className="form-control rounded-pill isearch" placeholder="Find user" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <i className="glyphicon glyphicon-user"></i>
                    </form>
                </div>
            </div>


            <FetchHeader
                uri={'http://localhost:8080/api/users'}
                typemethod={'GET'}
                bodys={''}
                renderSuccess={({ data }) => (
                    <table className="table table-striped">
                        <thead>
                            <tr><th>id</th>
                                <th>Username</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>joinDate</th>

                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((b, index) => (
                                <tr key={index}>
                                    <UserDetails
                                        id={b.idUser}
                                        username={b.username}
                                        name={b.name}
                                        email={b.email}
                                        role={b.role.nama}
                                        joindate={b.joinDate}
                                    />
                                </tr>
                            ))}

                        </tbody>
                    </table>

                )} />
        </>


    );
}