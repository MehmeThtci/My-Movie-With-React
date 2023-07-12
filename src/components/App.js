import React from 'react';
import MovieList from './MovieList';
import axios from 'axios';
import AddMovie from './AddMovie';
import Navbar from './Navbar';
import FooterDnm from './FooterDnm';
import EditMovie from './EditMovie';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stack from './Stack';

class App extends React.Component {

    state = {
        movies: [
        ],

        searchQuery: "",
        Category:""

    }


    componentDidMount() {
        this.getMovies();
    }

    async getMovies() {
        const response = await axios.get("http://localhost:3002/movies");

        this.setState({ movies: response.data })
    }

    deleteMovie = async (movie) => {
        axios.delete(`http://localhost:3002/movies/${movie.id}`)

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState(state => ({
            movies: newMovieList
        }))
    }


    searchMovie = (event,category) => {
        this.setState({ searchQuery: event.target.value })
        this.setState({ Category: category })

        

        


    }
    addMovie = async (movie) => {

        await axios.post(`http://localhost:3002/movies/`, movie)
        this.setState(state => ({
            movies: state.movies.concat([movie])
        }))


    }
    editMovie = async (id,updateMovie) => {

        await axios.put(`http://localhost:3002/movies/${id}`, updateMovie)



    }
    
    
    render() {

        let filteredMovies = this.state.movies.filter((movie) => {
            const nameMatch = movie.name.toLowerCase().includes(this.state.searchQuery.toLowerCase());
            const categoryMatch = !this.state.Category || movie.overview.toLowerCase().includes(this.state.Category.toLowerCase());
          
            return nameMatch && categoryMatch;
          }).sort((a, b) => {
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
          });
          
          



        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <React.Fragment>
                                <div className="container">
                                <div className="row"> 
                                    <Navbar SearchProps={this.searchMovie} />
                                </div>

                                <div className='row'>

                                    <div className='col-lg-11'>
                                    <MovieList
                                        movies={filteredMovies}
                                        deleteMovieProp={this.deleteMovie}
                                    />
                                    </div>
                                    <div className='col-' style={{width:"10px"}}>
                                        <Stack
                                        SearchProps={this.searchMovie}></Stack>  
                                    </div>
                                </div>
                                </div>

                        </React.Fragment>
                    }>
                    </Route>

                        <Route path="/add" element={
                            <React.Fragment>
                                <div style={{ height: '200px' }}></div>
                                <AddMovie
                                    movies={filteredMovies}                                
                                    onAddMovie={(movie) => { this.addMovie(movie);

                                    }}
                                />
                            </React.Fragment>


                        }>
                    </Route>
                    <Route path="/edit/:id"element={  
                            <React.Fragment>
                                <div style={{ height: '150px' }}></div>
                                <EditMovie
                                onEditMovie={(id,movie)=> {
                                    this.editMovie(id,movie);
                                }}
                                />
                            </React.Fragment>}/>
                </Routes>
                <FooterDnm></FooterDnm>
            
            </Router>
        );


        /*         <Router>
     
                     <Routes>
     
                     
                     <div>
                         
                         <Route> path='/' element={
                             <React.Fragment>
                                 <Navbar searchMovieProp={this.searchMovie}/>
                                 <div className="container">
                                     <div className='row mt-5'>
                                         <MovieList
                                             movies={filteredMovies}
                                             deleteMovieProp={this.deleteMovie} />
                                     </div>
                                 </div>
                             </React.Fragment>
     
                         }
                         </Route>
                         
                             <Route path="/add" element={<AddMovie/>}/>
                        
                     </div>
                     
                     </Routes>
                 </Router>
             );*/
    }

}

export default App;