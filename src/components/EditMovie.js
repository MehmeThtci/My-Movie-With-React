import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditMovie extends React.Component {

    state = {
        name: "",
        rating: "",
        overview: "",
        imageURL: ""
    }
    

    async componentDidMount() {
        const id = window.location.pathname.replace("/edit/", "")
         const response = await axios.get(`http://localhost:3002/movies/${id}`);

        this.setState(response.data)
    }
    


    
    handleFormSubmit = () => {

        const { name, rating , overview , imageURL} = this.state;
        const id = window.location.pathname.replace("/edit/", "");
        const updateMovie = {
            name:name,
            rating:rating,
            overview:overview,
            imageURL:imageURL,
        }
        this.props.onEditMovie(id,updateMovie);
        


    }

    onInputChange = (e) =>{
        console.log(e.target.name) 
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    sayHello() {
        alert('Hello!');
      }

    render() {

        return  (
            <nav style={{background:"#38535F",marginLeft:"490px",marginRight:"390px"}}>
                        <div style={{fontSize:"50px",color:"#e3f5ff"}}>

            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <div className="navbar mt-5" style={{justifyContent:"center",fontSize:"60px",color:"#fff"}}><div >{this.state.name} Filmini Düzenleme</div></div>  
                <div className="row">
                    <div className="form-group col-md-10">
                    <label htmlFor="inputRating">Name</label>
                        <input type="text" 
                                className="form-control" 
                                name="name"
                                style={{fontSize:"30px"}}
                                value={this.state.name}
                                onChange={this.onInputChange}/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="rating"
                                style={{fontSize:"30px",color:"red"}}
                               value={this.state.rating}
                               onChange={this.onInputChange}/>
                    </div>
                </div>
                <div className="form-row mt-5">
                    <div className="form-group col-md-12">
                    <img src={this.state.imageURL} className="rounded mx-auto d-block" style={{width:"300px"}} alt="Sample Movie" />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="imageURL"
                                style={{fontSize:"30px"}}
                                onChange={this.onInputChange}
                                value={this.state.imageURL}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea 
                                className="form-control" 
                                name="overview" 
                                rows="5"
                                style={{fontSize:"30px"}}
                                onChange={this.onInputChange}
                                value={this.state.overview}></textarea>
                    </div>
                </div>
                <Link to="http://localhost:3000/"  target="_top" relative='path' onClick={this.handleFormSubmit} type="submit" style={{width:"250px",height:"100px",marginLeft:"500px",fontSize:"46px"}} className="btn  btn-danger btn-block mb-5 mt-5 btn-lg">Kaydet</Link>
                
            </form>
        </div>
        </div>
        </nav>
        )

    }
        


}


export default EditMovie;