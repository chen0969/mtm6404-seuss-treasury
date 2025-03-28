import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"
// import { Nav } from "../components/Nav.jsx";
export const Seuss = () => {
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

    const randomOrderBooks = books
    .map(book => ({ book, sortKey: Math.random() })) 
    .sort((a, b) => a.sortKey - b.sortKey)             
    .slice(0, 8)
    .map(({ book }) => book)

    return (
        <>
            <div className="container">
                <div className="row pb-5 pt-5">
                    <h1 className="col-12 text-center">Seuss Treasury</h1>
                </div>
                <div className="row"><h2 className="col-12 text-center">Your Daily Books Selection</h2></div>
                <div className="row"><h4 className="col-12 text-center">We picked 8 interensing books for you!</h4></div>
                <div className="row">
                    {randomOrderBooks.map((book) => (
                        <Link key={book.id} className="col-md-3 border rounded text-center p-2" to={`/book/${book.id}`}>
                            <img src={book.image} alt="cover" className="w-100" />
                            <h3 className="btn btn-primary mt-2">{book.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}