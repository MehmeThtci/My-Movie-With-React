import React from 'react';

class Stack extends React.Component{

    handleFormSubmit = (event) => {
        event.preventDefault();
    }
    handleClick = (e,category) => {
        this.props.SearchProps(e,category)
      };


    render(){

    
  return (
<form onSubmit={this.handleFormSubmit} >
            <ul class="list-group" id="list-tab" role="tablist" style={{width:"200px",marginTop:"200px"}}>
            <button onClick={(e) => this.handleClick(e,"Aksiyon")} style={{fontSize:"30px"}} class="list-group-item list-group-item-action "id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Aksiyon</button>
            <button onClick={(e) => this.handleClick(e,"Macera")} style={{fontSize:"30px"}} class="list-group-item list-group-item-action">Macera</button>
            <button onClick={(e) => this.handleClick(e,"Korku")} style={{fontSize:"30px"}} class="list-group-item list-group-item-action">Korku</button>
            <button onClick={(e) => this.handleClick(e,"Bilim-Kurgu")} style={{fontSize:"30px"}} class="list-group-item list-group-item-action">Bilim Kurgu</button>
            <button onClick={(e) => this.handleClick(e,"Komedi")} style={{fontSize:"30px"}} class="list-group-item list-group-item-action">Komedi</button>
            </ul>
            </form>
  )}
}
export default Stack;