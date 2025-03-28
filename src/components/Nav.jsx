import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <div>
            <nav className="row justify-content-center">
                <NavLink className="col-3 btn btn-outline-secondary m-5 mt-2 mb-2" to='/'>Seuss Treasury</NavLink>
                <NavLink className="col-3 btn btn-outline-secondary m-5 mt-2 mb-2" to='/books'>Books</NavLink>
                <NavLink className="col-3 btn btn-outline-secondary m-5 mt-2 mb-2" to='/quotes'>Quotes</NavLink>
            </nav>
        </div>
    )
};