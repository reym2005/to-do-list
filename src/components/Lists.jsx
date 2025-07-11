 import styled from "styled-components";
 
const Button = styled.button`
        color: yellow;
        background-color: ${(props)=>props.rating > 8.5 ? "green" : "red"};
     `;
 const SeriesData =(props)=>
{
    console.log(props);
    const {name,
    id,
    img_url,
    rating,
    description,
    cast,
    genre,
    watch_url,} = props.curr;
     
            return(
            <li key={id} className="card">
        <div>
        <img src={img_url} width="40%" height="40%" />
        </div>
        <div className="card-content">
        <h2>
        Name: {name}
        </h2>
        <h3>
        Rating: <span className={`rating ${rating >= 8.5? "hit": rating >= 5?"avg":""}`}>{rating}</span>
        </h3>
        <p>
        Summary: {description}
        </p>
        <p> Cast: {cast.join(" , ")}</p>
         <p> Genre: {genre.join(" , ")}</p>
         <a href={watch_url} target="_blank">
        <Button  rating={rating}>Watch Now</Button>
        </a>
        </div>
        </li>);
        }

export default SeriesData;