import React,{createContext,useContext,useState} from "react";
import { v4 } from "uuid";
import bookData from "./book-data.json";

const BookContext = createContext();
console.log("ola");
 const useBooks = () => useContext(BookContext);

  function BookProvider({children}){
    const [books, setBooks] = useState([]);
    //const { loading, books, error } = useFetch(
       // `https://api.github.com/users/${login}`
    //   'http://localhost:8080/books'
    //  );
     

    const addBook =(title,price, isbn, desc, publisher, author, dimension, genre, language) =>    
            setBooks({       
                title:title,
                price:price,   
                isbn:isbn,
                description: desc,
                publisher:publisher,
                author : author,
                dimension:dimension,
                genre : genre,
                language : language
     
    });

    const removeBook = id =>
     setBooks(books.filter(book=>book.id !==id));

    return(
        <BookContext.Provider 
        value={{books,addBook, removeBook}}>
           {children}
           </BookContext.Provider>
            
    )
}

export {useBooks, BookProvider};

 
 