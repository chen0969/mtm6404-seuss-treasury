import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { useParams } from "react-router-dom";

export const SingleBook = () => {

    const [book, setUser] = useState(null)

    const params = useParams();

    useEffect(() => {
        fetch(`https://seussology.info/api/books/${params.id}`)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, []);

    return (
        <>
            <div className="container mt-5">
                <div className="row align-items-center">
                    <h1 className="col-6 text-center">{book?.title}</h1>
                    <div className="col-3 m-5 border border-info border rounded">
                        {book?.image ? (
                            <img src={book.image} alt="cover" className="w-100" />
                        ) : (
                            <p>Sorry, no photo</p>
                        )}</div>
                </div>
                <div className="row border border-info border rounded">
                    <p className="col-6"><strong>Published: </strong>{book?.year_published}</p>
                    <p className="col-6"><strong>Sort: </strong>{book?.title_sort}</p>
                    <p className="col-6"><strong>Description: </strong>{book?.description}</p>
                </div>
            </div>
        </>
    )
}