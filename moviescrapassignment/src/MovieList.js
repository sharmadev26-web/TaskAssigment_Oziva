import {useState} from 'react';
import MovieCast from './MovieCast';
import axios from 'axios';
import './movieList.css';

function MovieList(props) {

  const [moviewCast, setMovieCast] = useState("");
  const [isCastVisible, setIsCastVisible] = useState(false);
  const getCastDetails = (event) => {
      console.log(isCastVisible);
      if(!isCastVisible){
        let identity = event.currentTarget.getAttribute("identity");
        let indexValue = identity.indexOf("?");
        let castURL = identity.substring(0,indexValue);
        console.log(castURL);
        axios.get("http://localhost:70/getCast/?castURL="+castURL)
          .then((res)=>{
            console.log(res);
            setMovieCast(res.data);
            setIsCastVisible(true);
          })
          .catch((err)=>{
            console.log(err);
        })
      }
      
  }
  const closeCastDetails = () => {
    setIsCastVisible(false);
  }
  return (
    <div className="contaier">
      <div className="movie-name" identity={props.identity} onClick={getCastDetails}>
          {props.value}
      </div>
      {isCastVisible ? <MovieCast closeCastDetails={closeCastDetails} movieCast={moviewCast}></MovieCast> : ''}
    </div>
  );
}

export default MovieList;