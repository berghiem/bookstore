import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


export default function EditUser() {

    const [idUser, setIdUser] = useState("");
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [noHp, setNoHp] = useState("");
    const [address, setAddress] = useState("");
    const [roleId, setRoleId] = useState(2);
    const [roles, setRoles] = useState([1,2,3]);
    const params = useParams();

    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [message, setMessage] = useState("");


    useEffect(() => {

        if (params) {

            //GET USER
            const uri = ` http://localhost:8080/api/users/${params.id.toString()}`
            fetch(uri, {
                method: "GET",
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(data => data.json())
                .then(data => {
                    setIdUser(data.idUser == null ? "" : data.idUser);
                    setUsername(data.username == null ? "" : data.username);
                    setName(data.name == null ? "" : data.name);
                    setEmail(data.email == null ? "" : data.email);
                    setNoHp(data.noHp == null ? "" : data.noHp);
                    setAddress(data.address == null ? "" : data.address);
                    setRoleId(data.roleId == null ? "" : data.roleId);
                })
                //  .then(() => setLoading(false))
                .catch((
                    <pre>eror kenapa</pre>
                ));

            // GET ROLE    
            // const uriRole = "http://localhost:8080/api/role/"
            // fetch(uriRole, {
            //     method: "GET",
            //     headers: { 'Authorization': `Bearer ${token}` }
            // })
            //     .then(data => data.json())
            //     .then(data => {
            //         setRoles(data.roles);
            //     })
            //     .catch((
            //         <pre>eror kenapa</pre>
            //     ));
        }



    }, []);

    const updateUser = async (e) => {
        e.preventDefault();

       

        console.log("updatebook");
        fetch(`http://localhost:8080/api/users/${idUser}`, {
            method: "POST",
            body: JSON.stringify({
                idUser, username, name, email, noHp, address, roleId
            }),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(m => m.json())
            .then(m => {
                //setMessage(JSON.stringify(m));
                //  toast(JSON.stringify(m));
                console.log(`${m}`)
                navigate("/userlist", { state: { m } })
            })
            .catch(error => (setMessage(error))
            );

    };

    const onOptionChangeHandler = e =>{
        console.log("role selected : "+ e.target.value);
        setRoleId(e.target.value);
    }


    return (

        <>

            <div className="container mt-3">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Edit User
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="col mx-1 mx-md-4" >

                                        <form onSubmit={updateUser}   >
                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="id">Id</label>
                                                <div className="col">
                                                    <input
                                                        value={idUser}
                                                        className="form-control"
                                                        type="text"
                                                        id="id"
                                                        disabled />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="username">Username</label>
                                                <div className="col">
                                                    <input
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        className="form-control"
                                                        type="text"
                                                        id="username" />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="name">Name</label>
                                                <div className="col">
                                                    <input
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        className="form-control"
                                                        type="text"
                                                        id="name" />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="email">Email</label>
                                                <div className="col">
                                                    <input
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="form-control"
                                                        type="email"
                                                        id="email" />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="address">Address</label>
                                                <div className="col">
                                                    <input
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                        className="form-control"
                                                        type="text"
                                                        id="address" />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label className="col-form-label col-md-2" htmlFor="address">Role</label>
                                                <div className="col">
                                                    <select value={roleId} 
                                                      onChange={onOptionChangeHandler} required>

                                                        <option selected disabled value={""}>Please choose one option</option>
                                                        {roles.map((option, index) => {
                                                            return <option key={index} >
                                                                {option}
                                                            </option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="d-grid gap-2 col-lg-6 mx-auto  mt-5">
                                                <button className="btn btn-primary">Update User</button>
                                            </div>

                                        </form>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>


    );

}