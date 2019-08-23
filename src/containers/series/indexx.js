import React,{useState} from 'react';
import Serieslist from '../../components/SeriesList/SeriesList';
import Loader from '../../components/Loader/index';



const Series =()=>{
    const [series,setSeries] = useState([]);
    const [seriesName,setSeriesName] = useState('');
    const [isFetching,setIsFetching] = useState(false);

    const onSeriesInputChange=(e)=>{
        setSeriesName(e.target.value);
        setIsFetching(true);
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((response)=>response.json())
        .then((json)=>setSeries(json),setIsFetching(false))
    }


    return(
        <div>
            Length of series is {series.length}
            <div>
                <input value={seriesName} type="text" onChange={onSeriesInputChange}/>
            </div>
            {
                !isFetching && series.length===0 && seriesName.trim() ===''
                &&
                <p>Please enter Series name into the input</p>
            }
            {
                !isFetching && series.length===0 && seriesName.trim() !==''
                &&
                <p>No Tv Series found with this name</p>
            }
            {
                isFetching && <Loader/>
            }
            {
                !isFetching && <Serieslist list={series}/> 
            }
            
            
        </div>
    );
}

export default Series;