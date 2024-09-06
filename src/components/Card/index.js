export function Card({ movie }) {
  return (
    <div className="card" title={movie.Title}>
      <img src={movie.Images[0]} alt="movie" />
      <p>Título: {movie.Title}</p>
      <p>Ano: {movie.Year}</p>
      <p>Nota: {movie.imdbRating}</p>
      <p>Diretor: {movie.Director}</p>
    </div>
  );
}
