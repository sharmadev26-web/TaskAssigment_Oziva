import './movieList.css';

function MovieCast(props) {
    const closeHanlder = ()=>{
        props.closeCastDetails();
    }
  return (
    <div>
     {props.movieCast.map((item,index)=><div key={index}> {item}</div>)}
     <button onClick={closeHanlder}>Close</button>
    </div>
  );
}

export default MovieCast;