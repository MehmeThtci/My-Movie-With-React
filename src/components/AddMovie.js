import React from "react";
import serialize from "form-serialize";
import { useNavigate } from 'react-router-dom';

const AddMovie = ({ onAddMovie }) => {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newMovie = serialize(event.target, { hash: true });
    onAddMovie(newMovie);

    navigate("/");
  };

  return (
    <nav style={{ background: "#38535F", marginLeft: "490px", marginRight: "390px" }}>
      <div style={{ fontSize: "50px", color: "#e3f5ff" }}>
        <div className="navbar mt-5" style={{ justifyContent: "center" }}>
          <div>FİLM EKLEME</div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "100px" }}>
        <form className="mt-5" onSubmit={handleFormSubmit}>
          <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
          <div className="form-row" style={{ color: "#ccc" }}>
            <div className="form-group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input type="text" className="form-control" name="rating" />
            </div>
          </div>
          <div className="form-row" style={{ color: "#fff" }}>
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input type="text" className="form-control" name="imageURL" />
            </div>
          </div>
          <div className="form-row mb-2" style={{ color: "#fff" }}>
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea className="form-control" name="overview" rows="5"></textarea>
            </div>
            <input type="submit" style={{ marginTop: "20px" }} className="btn btn-danger d-grid col-10 mx-auto btn-lg btn-block mt-xl-5" value="Add Movie" />
          </div>
          <br></br>
        </form>
      </div>
    </nav>
  );
};

export default AddMovie;
