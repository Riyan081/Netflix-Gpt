import {useSelector} from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () =>{
 const movies = useSelector(store=>store?.movies?.nowPlayingMovies);
 if(!movies) return (
   <div className="w-full h-screen bg-black flex items-center justify-center">
     <div className="text-white text-2xl">Loading...</div>
   </div>
 );
 const mainMovie = movies?.[0];
 if(!mainMovie) return null;
//console.log(mainMovie);

const{original_title,overview,id} = mainMovie;

    return (
        <div>
          <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;