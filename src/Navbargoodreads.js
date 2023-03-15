import { AiOutlineUser } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from './action/auth';
import { Navbar } from 'react-bootstrap';
import EditorsChoiceBooks from './EditorsChoiceBooks';
import { useNavigate } from 'react-router-dom';

function Navbargoodreads(
    {
        auth: { isAuthenticated, loading, user, roles, email },
        logout
    }

) {

    const navigate = useNavigate();
    const roless = JSON.stringify(roles);
    const logoutEvent = () => {
        navigate("/");
        logout();
    }
    const authLinks = (
        <>

            <li className="nav-item mt-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >
                <Link to="/register"  >
                    <span className="mt-2"><AiOutlineUser size={19} />My Account</span> 
                </Link>
            </li>
            <li><a onClick={logoutEvent} href='#!' >Logout  </a></li>
        </>
    );



    const guestLinks = (
        <>

            <li className="nav-item mt-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >
                <Link to="/register"  >
                    <AiOutlineUser size={21} className="mt-2" />
                </Link>
            </li>
            <li className="nav-item mt-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                <Link to="/login" className="btn btn-outline-secondary"  ><span>Login</span></Link>
            </li>


        </>


    );



    const notadminLinks = (
        <></>
    );

    const roleLinks = (roless) => {

        if ((isAuthenticated) && roless.includes('ADMIN')) {
            return <Admin />;
        } else {
            if ((isAuthenticated) && roless.includes('EDITOR')) {
                return <Editor />;
            }
        }


    }

    return (

        <>


            {console.log(`user roless :${typeof roles}  ${(roless.includes('ADMIN'))}`)}
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "lightskyblue" }}>

                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >
                        <img 
                        //src={require("./book.png")}
                         width="30" height="24" />
                    </ Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">

                            {!loading && (<div>{isAuthenticated ? authLinks : guestLinks}</div>)}

                            {roleLinks(roless)}

                            <li className="nav-item mt-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                <Link to="/" className="nav-link active" aria-current="page" >My Favorite Books</Link>
                            </li>
                            <li className="nav-item mt-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                <Link to="/review"
                                    className="nav-link active" aria-current="page" ><span>My Book Review</span></Link>
                            </li>
                            <li className="nav-item mt-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                <Link to="/shoppingCart"  >
                                    <FiShoppingCart size={21} className="mt-2 mx-2" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >
        </>


    )
}
const User = () => (
    <div> <p>user</p>

        {/* <li className="nav-item mt-2">
            <Link to="/" className="nav-link active" aria-current="page" >My Favorite Books</Link>
        </li>
        <li className="nav-item mt-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
            <Link to="/review"
                className="nav-link active" aria-current="page" ><span>My Book Review</span></Link>
        </li>
        <li className="nav-item mt-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
            <Link to="/shoppingCart"  >
                <FiShoppingCart size={21} className="mt-2 mx-2" />
            </Link>
        </li> */}
    </div>
);

Navbargoodreads.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});


const Editor = () => (
    <>
        <li className="nav-item mt-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >
            <Link to="/choiceBook" aria-current="page" >
                <span className="nav-link active">My Choices of Book </span>
            </Link>
        </li>
    </>
);

const Admin = () => (
    <>
        <li className="nav-item mt-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >
            <Link to="/admindashboard" aria-current="page">
                <span className="nav-link active">Dashboard </span>
            </Link>
        </li>

        <li className="nav-item mt-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >
            <Link to="/addBook" aria-current="page">
                <span className="nav-link active">Admin Add Book </span>
            </Link>
        </li>

        <li className="nav-item mt-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >
            <Link to="/genrelist" aria-current="page">
                <span className="nav-link active">Admin List Genre </span>
            </Link>
        </li>

        <li className="nav-item mt-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
            <Link to="/booklist" aria-current="page" className="nav-link active" >
                <span>Admin List Book</span>
            </Link>
        </li>
    </>
);



export default connect(mapStateToProps, { logout })(Navbargoodreads);