import React from "react";
import SearchBar from "./SearchBar";


class Navbar extends React.Component {




    render() {

        return (
            <nav style={{ height: "100px", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px 20px", background: "#2f4650", position: "fixed", top: "0", left: "0", right: "0", zIndex: "99" }}>
                <div style={{ flex: "1 0 20%" }}>
                    <a className="navbar-brand" href="http://localhost:3000" style={{ fontSize: "50px", color: "#fff" }}>
                        ForX Movie
                    </a>
                </div>


                <div style={{ flex: "0 0 80%" }}>
                    <SearchBar
                        NavProp={this.props.SearchProps}
                    />
                </div>

                <div className="col">
                    <a href="http://localhost:3000/add" className="btn btn-lg btn-info" style={{ height: "60px", width: "200px", marginLeft: "-300px", fontSize: "25px", color: "#444444" }}>
                        Film Ekle
                    </a>
                </div>


            </nav>
        )
    }

}
export default Navbar;