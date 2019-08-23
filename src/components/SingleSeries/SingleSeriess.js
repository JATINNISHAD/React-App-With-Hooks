import React,{useState,useEffect} from 'react';
import Loader from '../Loader/index';

const SingleSeries =(props)=>{
    const [show,setShow] = useState(null);

    useEffect(()=>{
        const {id} = props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then((response)=>response.json())
        .then((json)=>setShow(json));
    })
        

    return (
        <div>
            {!show===null && <Loader/> }
            {
                show !==null
                &&
                <div>
                    <p>{show.name}</p>
                    <p>Premiered = {show.premiered}</p>
                    <p>Rating - {show.rating.average}</p>
                    <p>Episodes = {show._embedded.episodes.length}</p>
                    <p>
                        <img alt="show" src={show.image.medium}/>
                    </p>
                </div>
            }
        </div>

    );

}

export default SingleSeries;
