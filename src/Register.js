
import { useInput } from "./useinput";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect, Connect } from "react-redux";
import { register } from "./action/auth";
import { PropTypes } from "prop-types";

 function Register({
    register
}) {
    const [formData, updateFormData] = useState({
        name: '',
        email: '',
        password: '',
        username: '',
        phone: '',
        profpic: ''
    });

    const { name, email, password, confirmpw, username, phone, profpic } = formData;

    const onChange = e => updateFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();

        console.log(formData);
        register({username,email,password});   

    }

    return (
        <>

            <div className="container mt-3">
                <div className="row mx-2">
                    <h1 className="col text-primary ">Create your account</h1>
                    <p>Please fill in registration form bellow </p>
                </div>
                <div className="row">

                    <div className="col mx-1 mx-md-4" >

                        <form className="form" onSubmit={e => onSubmit(e)}>
                            <div className="row my-4 mx-3 form-floating">

                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={e => onChange(e)}
                                    placeholder="First and last name"
                                    id="floatingInputValue"
                                    required />

                                <label className="col-md-2 text-secondary" htmlFor="floatingInputValue">Your name</label>

                            </div>
                            <div className="row my-4 mx-3 form-floating">
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={e => onChange(e)}
                                    id="email"
                                    required />
                                <label className="col-md-2 text-secondary" htmlFor="email">Email</label>

                            </div>


                            <div className="row my-4 mx-3 form-floating">
                                <input
                                    className="form-control"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={e => onChange(e)}
                                    aria-describedby="passwordHelpBlock"
                                    required />
                                <div id="passwordHelpBlock" className="form-text">
                                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                </div>
                                <label className="text-secondary col-md-2" htmlFor="password">Password</label>



                            </div>

                            <div className="row my-4 mx-3 form-floating">
                                <input
                                    className="form-control"
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={username}
                                    onChange={e => onChange(e)} />
                                <label className="col-form-label col-md-2" htmlFor="username">Username</label>

                            </div>
                            <div className="row my-4 mx-3 form-floating">
                                <input
                                    className="form-control"
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={e => onChange(e)} />
                                <label className="text-secondary col-md-2" htmlFor="phone">Phone Number</label>

                            </div>



                            <div className="row my-4 mx-3 form-floating">
                                     <input
                                        name="profpic"
                                        value={profpic}
                                        onChange={e => onChange(e)}
                                        className="form-control"
                                        type="file"
                                        id="picture" />
                                    <label className="text-secondary col-md-2" htmlFor="picture">Profile Picture</label>
 
                            </div>


                            <div className="d-grid gap-2 col-lg-6 mx-auto  mt-5 mb-5">
                                <button type="submit" className="btn btn-primary" > Create Account</button>
                            </div>

                            <div className="d-grid gap-2 col-lg-6 mx-auto  mt-5 mb-5 text-center ">
                                <p className="fs-6 text">By creating an account, you agree to the PerpusOnline Terms of Service and Privacy Policy
                                </p>
                            </div>


                        </form>


                    </div>
                </div>
            </div>
        </>



    );
};

Register.propTypes ={
    register : PropTypes.func.isRequired,
};

export default connect(null, {register})(Register);

