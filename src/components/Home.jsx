import React, { useEffect ,useState}  from 'react'
import "./Home.scss"
import axios from "axios"
import { Link } from 'react-router-dom'
// import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
// import AddSharpIcon from '@mui/icons-material/AddSharp';






const url = "https://api.themoviedb.org/3/movie";
const imgUrl="https://image.tmdb.org/t/p/original"



const Card = ({ img }) => {
    return (
        <div className='card'>
            <img src={img} alt="cover"  />
        </div>
    )
};



const Row = ({ title,arr=[] }) => {
    return (
        <>
      
            <div className='row'>

                <h2>{title}</h2>
                <div >
                    {
                       arr.map((item)=>{
                            return(<Card img={`${imgUrl}/${item.poster_path}`} key={item.id} />);
                        })
                    }




                </div>


            </div>

        </>
    )




};


export default function Home() {
   const page=1;
    const[upcomingMovies,setUpcomingMovies]=useState([]);
    const[popularComing,setpopularComing]=useState([]);
    const c = "7e5122f42b3d47b2f9c1deaf4e1d2214"
    const[NowPlaying,setNowPlaying]=useState([]);
    const[topRated,settopRated]=useState([]);
    
    useEffect(() => {
        const fetchupComing = async () => {
            const { data:{results} } = await axios.get(`${url}/upcoming?api_key=${c}&page=${page}`);
         
            setUpcomingMovies(results);
        }
        const PopularComing = async () => {
            const { data:{results} } = await axios.get(`${url}/popular?api_key=${c}&page=${page}`);
          
            setpopularComing(results);
        }
     
        const NowPlaying = async () => {
            const { data:{results} } = await axios.get(`${url}/now_playing?api_key=${c}&page=${page}`);
          
            setNowPlaying(results);
        }
     
        const TopRated= async () => {
            const { data:{results} } = await axios.get(`${url}/top_rated?api_key=${c}&page=${page}`);
         
            settopRated(results);
        }
   
     
        fetchupComing();
        PopularComing ();
        NowPlaying();
        TopRated();
       
       

    },[page]);

    return (
        <>
            <section className="home">
                {/* <div className="banner"  style={{backgroundImage:`url(${`${imgUrl}/${popularComing[0].poster_path}`})`}}>
                  
                  <h2>{popularComing[0].original_title}</h2>
                  <p>{popularComing[0].overview}</p>
                  <div>
                  <button><PlayArrowSharpIcon/>Play</button>
                  <button><AddSharpIcon />My List</button>
                  </div>
                </div> */}
                <Row title={"Upcoming Movies"}  arr={upcomingMovies}/>
                <Row title={"Popular Movies"} arr={popularComing} />
                <Row title={"Now Playing"} arr={NowPlaying} />
                <Row title={"Top Rated "} arr={topRated} />

          
                
               
              

            </section>

        </>
    )
}
