import React, { Component, useState } from "react";
import { Link, useHistory, Redirect, Navigate } from "react-router-dom";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { login } from './action/auth';



 function Login({
     login,
     isAuthenticated,
     roles

}) {

    const [formData, updateFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange =e => updateFormData({
        ...formData,
        [e.target.name] : e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
        login({username,password});
    };

    if(isAuthenticated){ 
        return <Navigate replace to="/admindashboard" />;
    }

    return (

        <div className="d-flex containerl">
            <div className="container ">
                <div className="row ">

                    <div className="col mx-1 mx-md-4" >
                        <div className="row mb-3 justify-content-center ">
                            <h1 className="col-md-4 text-center" style={{ "color": "white" }}>Login</h1>
                        </div>
                        <form className="form" onSubmit={e => onSubmit(e)}>

                            <div className="row mt-3 justify-content-center ">
                                <div className="col-md-4">
                                    <div className="form-floating">

                                        <input
                                            className="form-control forma"
                                            type="text"
                                            id="username"
                                            placeholder="your username"
                                            name="username"
                                            value={username} 
                                            onChange={e => onChange(e)}
                                           
                                        />
                                        <label htmlFor="username">Username</label>
                                    </div>

                                </div>
                            </div>

                            <div className="row mb-3 justify-content-center">
                                <div className="col-md-4">
                                    <div className="form-floating">
                                        <input
                                            className="form-control formb "
                                            type="password"
                                            id="password"
                                            placeholder="your password" 
                                            name="password"
                                            value={password}         
                                            onChange={e => onChange(e)}/>
                                        <label
                                            htmlFor="password">Password</label>
                                    </div>

                                </div>
                            </div>

                            <div className="d-grid gap-2 col-4 mx-auto  mt-1">
                                <button type="submit"
                                    className="btn btn-primary"
                                >

                                    <span>Login</span>
                                </button>
                            </div>




                            <div className="row my-3 justify-content-center">
                                <p className="col-md-4 text-center" style={{ "color": "white" }}>New user ? Please <Link to="/register"> register here</Link></p>
                            </div>


                        </form>

                    </div>
                </div>
            </div>
        </div>


    )


};

Login.propTypes = {
    login : PropTypes.func.isRequired,
    isAuthenticated : PropTypes.bool
};

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect (mapStateToProps, {login}) (Login);   
 