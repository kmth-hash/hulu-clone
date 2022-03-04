import React , {useState , useEffect} from 'react' ;
import VideoCard from './VideoCard' ;
import './Results.css' ;
import axios from './axios';
import requests from './requests';

function Results() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            
            const request = await axios.get(requests.fetchTrending);
            setMovies(request.data.results);
            console.log(request.data.results);
        }

        fetchData();
    }, [])


    return (
        <div className="resultsDiv">
            {movies.map((movie) => (
                <VideoCard movie = {movie}/>
            ))}
        </div>
    )
}

export default Results;
