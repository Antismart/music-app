import {NavLink} from "react-router-dom";
import { Component } from "react";

export default class AppRouter extends Component {
    render() {  
        return(
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'> <span className="  material-symbols-sharp  m-6"  style={{color:"white" }}> home </span></NavLink>
                    </li>
                    {/* <li>
                        <NavLink to='/'>  <span className="material-symbols-sharp m-6" style={{color:"white"}}>  explore </span></NavLink>
                    </li> */}
                </ul>
            </nav>

        )
}
}