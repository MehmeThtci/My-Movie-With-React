import React from "react";

const MovieList =(props) => {

    const truncateOverView =(String,MaxLength) => {
        if(!String) return null;
        if(String.length < MaxLength) return String;
        else return `${String.substring(0, MaxLength)} ...`;
    }


        return (
                <div className="row">
                     <div style={{ height: '200px' }}></div>

                {props.movies.map((movie,i) => (

                    <div className="col-lg-4" key={i}>
                        <div className="card mb-4 shadow-sm">
                            <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />
                            <div className="card-body" style={{backgroundColor: "#ccc"}}>
                                <h5 className="card-title">{movie.name}</h5>
                                <p className="card-text">{truncateOverView(movie.overview,90)}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="button" onClick={(event) => props.deleteMovieProp(movie)} style={{width:"100px",fontSize:"20px"}}className="btn btn-md btn-danger">Delete</button>
                                    <a type="button" href={`/edit/${movie.id}`} style={{marginRight:"100px",width:"100px",fontSize:"20px"}} className="btn btn-primary">Edit</a>
                                    <h2><span className="badge badge-pill badge-info" style={{ color: "#cb410b" }}>{movie.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        )
    

}
export default MovieList;