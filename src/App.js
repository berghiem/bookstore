import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import AddBookForm from './AddBookForm';
import Navbargoodreads from './Navbargoodreads';
import { Jumbogoodreads } from './Jumbogoodreads';
import EditorsChoiceBooks from './EditorsChoiceBooks';
import GenreList from './GenreList';
import Booklist from './Booklist';
import { ViewBookDetail } from './ViewBookDetail';
import { useHistory } from "react-router-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Home } from './Home';
import Register from './Register';
import EditBookForm from './EditBookForm';
import Welcome from './Welcome';

import { EditGenre } from './EditGenre';
import { MyReviewList } from './MyReviewList';
import { ShoppingCart } from './ShoppingCart';
import Login from './Login';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './helpers/setAuthToken';
import { useEffect } from 'react';
import { loadUSer } from './action/auth';
import { MyChoicesBook } from './MyChoicesBook';
import ProtectedRoute from './ProtectedRoute';
import GenreHome from './GenreHome';
import BooksHome from './BooksHome';
import AddReview from './AddReview';
import AdminDashboard from './AdminDashboard';
import UserList from './UserList';
import EditUser from './EditUser';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUSer())
  }, []);

  const [roleof, setRole] = useState(localStorage.getItem("roles"));
 // console.log(`ini App JS , roles ${roleof}`);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbargoodreads />
          <Routes>
            <Route history="" path='/' element={<Home />}></Route>
            <Route path="/bookDetail/:id" element={<ViewBookDetail />}></Route>
            <Route path="/bookGenre/:id/:name" element={<BooksHome />}></Route>
            <Route path='/register' element={<Register />} ></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path="/addreview" element={<AddReview />} ></Route>
            

            <Route path='/booklist' element={
              <ProtectedRoute redirectPath="/"
                role = 'ADMIN' >
                <Booklist />
              </ProtectedRoute>}>
            </Route>

            <Route path="/admindashboard" element={
              <ProtectedRoute redirectPath="/"
              role = 'ADMIN' >
                <AdminDashboard />
              </ProtectedRoute>}>
            </Route>


            <Route path='/addBook' element={
              <ProtectedRoute redirectPath="/"
              role = 'ADMIN' >
                <AddBookForm />
              </ProtectedRoute>}>
            </Route>

            <Route path='/editBook/:id' element={
              <ProtectedRoute redirectPath="/"
              role = 'ADMIN' >
                <EditBookForm />
              </ProtectedRoute>} >
            </Route>

            <Route path='/genrelist' element={
              <ProtectedRoute redirectPath="/"
              role = 'ADMIN' >
                <GenreList />
              </ProtectedRoute>} >
            </Route>

            <Route path='/editgenre/:id' element={
              <ProtectedRoute redirectPath="/"
              role = 'ADMIN' >
                <EditGenre />
              </ProtectedRoute>} >
            </Route>

            <Route path='/userlist' element={
              <ProtectedRoute redirectPath="/"
              role = 'ADMIN' >
                <UserList />
              </ProtectedRoute>} >
            </Route>

            <Route path='/editUser/:id' element={
              <ProtectedRoute redirectPath="/"
              role = 'ADMIN' >
                <EditUser />
              </ProtectedRoute>} >
            </Route>

            <Route path='/review' element={<MyReviewList />} > </Route>
            <Route path='/shoppingCart' element={<ShoppingCart />}> </Route>
            <Route path='/welcome' element={<Welcome />}> </Route>
            

            <Route path='/choiceBook' element={
              <ProtectedRoute redirectPath="/"
              role = 'EDITOR' >
                <MyChoicesBook />
              </ProtectedRoute>  }> 
            </Route>

           


          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
