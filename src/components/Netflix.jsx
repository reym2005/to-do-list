import series from '../api/series.json';
import SeriesData from './Lists';
export const Netflix=()=>
{
   
        return(
            <ul className="grid grid-three-cols">
                {series.map((curr)=>{
                    return <SeriesData key ={curr.id}curr={curr} />;
                })}
            
            </ul>
        )
    
};
