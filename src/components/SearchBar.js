import React from "react";

class SearchBar extends React.Component{
    

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(event)
    }

    render() {

        return (
            <form onSubmit={this.handleFormSubmit} >
                <div className="form group row ">

                    <div className="row">
                        
                    <div className="col-9">

                        <input 
                        onChange={this.props.NavProp} 
                        type="text" 
                        className="form-control" 
                        style={{height:"60px",fontSize:"25px"}}
                        placeholder="Film Ara" 
                        />
                    </div>
                    
                   {/* <div className="col-2">
                        <button type= "button"
                                className="btn btn-lg btn-info"
                                
                                style={{height:"60px",width:"200px",fontSize:"25px",color:"#444444"}}>Film Ekle
                        </button>
        </div>*/}

                    </div>

                </div>
            </form>
           
        )
    }

}
export default SearchBar;