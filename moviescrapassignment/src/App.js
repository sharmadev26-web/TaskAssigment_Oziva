import {useEffect,useState} from 'react'
import axios from 'axios';
import MovieList from './MovieList'
import './movieList.css'

function App() {
  let movieListNumber;
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:70/")
        .then((res)=>{
          setMovies(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })
  },[]);
  const storeUserPref = (event) => {
    movieListNumber = event.currentTarget.value;
  }
  const getMovieListByNumber = () => {
    axios.get("http://localhost:70/?movieListNumber="+(movieListNumber?movieListNumber:250))
        .then((res)=>{
          setMovies(res.data);
        })
        .catch((err)=>{
          console.log(err);
    })
  }
  return (
    <div>
      <h3 className="heading">Top Movie List</h3>

      <div className="input-box">
        <input type="text" onChange={storeUserPref}/>
        <button onClick={getMovieListByNumber}>Get List By Number</button>
      </div>
      {movies.map((item, index)=><MovieList key={index} value={item.name} identity={item.identity}></MovieList>)}
      
    </div>
  );
}

export default App;
