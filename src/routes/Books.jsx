import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"
// import { Nav } from "../components/Nav.jsx";
export const Books = () => {
    const [books, setBooks] = useState([]);

    // fetch the users data and set in state
    useEffect(() => {
        fetch('https://seussology.info/api/books')
            .then((res) => res.json())
            .then(
                (data) => {
                    setBooks(data);
                }
            );
    }, []);

    return (
        <>
            <div className="container">
                <div className="row pb-5 pt-5">
                    <h1 className="col-12 text-center">Books Overview</h1>
                </div>
                <div className="row">
                    {books.map((book) => (
                        <Link key={book.id} className="col-md-3 border rounded text-center p-2" to={`/book/${book.id}`}>
                            <img src={book.image} alt="cover" className="w-100" />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}