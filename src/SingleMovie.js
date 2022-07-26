import React from "react";
import useFetch from "./useFetch";
import { useParams, Link } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, data: movie, error } = useFetch(`&i=${id}`);

  if (loading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          Back To Movies
        </Link>
      </div>
    );
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          Back To Movies
        </Link>
      </div>
    </section>
  );
};
export default SingleMovie;
