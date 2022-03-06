import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp , CalendarToday} from "@material-ui/icons";


const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie } , ref ) => {

  return (
    <div ref = {ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="moviePoster"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.original_title || movie.original_name}</h2>
      <div className="movie_stats">
        <div>
          <CalendarToday />
          {movie.release_date}
        </div>
        <div>
          <ThumbUpSharp />
          {movie.vote_count}
        </div>
        
      </div>
    </div>
  );
}
)
export default VideoCard;
