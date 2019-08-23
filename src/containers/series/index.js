import React ,{Component} from 'react';
import Serieslist from '../../components/SeriesList/SeriesList';
import Loader from '../../components/Loader/index';

class Series extends Component{
    constructor(props){
        super(props);
        this.state={
          series:[],
          seriesName:'',
          isFetching:false
        }
        this.onSeriesInputChange = this.onSeriesInputChange.bind(this);
    }
    
    onSeriesInputChange(e){
        this.setState({seriesName:e.target.value, isFetching:true})
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((response)=>response.json())
        .then((json)=>this.setState({series:json,isFetching:false}))
    }

    render(){
        const {series,seriesName,isFetching} = this.state;

        return(
            <div>
                Length of series is {this.state.series.length}
                <div>
                    <input value={seriesName} type="text" onChange={this.onSeriesInputChange}/>
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
                    !isFetching && <Serieslist list={this.state.series}/> 
                }
                
                
            </div>
        );
    }
}
export default Series;