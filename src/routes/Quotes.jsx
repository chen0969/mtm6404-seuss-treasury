import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"
// import { Nav } from "../components/Nav.jsx";
export const Quotes = () => {
    const [quotes, setQuotes] = useState([]);

    // fetch the users data and set in state
    useEffect(() => {
        fetch('https://seussology.info/api/quotes')
            .then((res) => res.json())
            .then(
                (data) => {
                    setQuotes(data);
                }
            );
    }, []);

    const randomOrderQuotes = quotes
    .map(quote => ({ quote, sortKey: Math.random() })) 
    .sort((a, b) => a.sortKey - b.sortKey)             
    .slice(0, 9)
    .map(({ quote }) => quote)

    return (
        <>
            <div className="container">
                <div className="row pb-5 pt-5">
                    <h1 className="col-12 text-center">Quotes of the day</h1>
                </div>
                <div className="row"><h4 className="col-12 text-center">Get your quotes everyday!</h4></div>
                <div className="row justify-content-center">
                    {randomOrderQuotes.map((quote) => (
                        <Link key={quote.book.id} className="col-md-5 border rounded p-2 text-dark m-3" to={`/book/${quote.book.id}`}>
                            <h3 className="col-12">{quote.text}</h3>
                            <p className="col-12">---From: {quote.book.title}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}