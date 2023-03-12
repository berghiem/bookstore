import BooksHome from "./BooksHome";
import EditorsChoiceBooks from "./EditorsChoiceBooks";
import GenreHome from "./GenreHome";
import { Jumbogoodreads } from "./Jumbogoodreads";
import { Fetch } from './Fetch';

export function Home(){
    return (
        <> 
        <Jumbogoodreads />
        <EditorsChoiceBooks />
        <GenreHome />
        <Fetch
                uri={` http://localhost:8080/api/genre`}
                renderSuccess={({ data }) => (
                    <div> 
                            {data.map((d, index) => (
                                 <div key={index} >
                                   <BooksHome genreId = {d.genreId} genreName = {d.name}/>  
                                 </div>
                            ))}
                            

                    </div>

                )} />
                            
       
        </>
       
    )
}