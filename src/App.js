import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

export default function App() {
  console.log("hi");
  const movies =[
  {Moviename:"The Avengers ",
  poster:"https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
  rating:8,
  summary:"The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task."},

  {Moviename:"Ice Age",
  poster:"https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/ice-age-poster.jpg?itok=u9hfGboF",
  rating:7.5,
  summary:"Manny the mammoth, Sid the loquacious sloth, and Diego the sabre-toothed tiger go on a comical quest to return a human baby back to his father, across a world on the brink of an ice age."},


  {Moviename:"Fast & Furious",
  poster:"https://i.guim.co.uk/img/media/9b6e9fa3865e25fc67d2e99c7efacdc4fa37586a/0_29_2992_1796/master/2992.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=360b5f57f4bed3fe620f9e5e71bdda9f",
  rating:6.6,
  summary:"Fast & Furious is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists, spies and family.Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most. "},


  {Moviename:"Inception",
  poster:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRahMdIAUM-EOFYqEUdg55XHG4JQYaskXKhDG8WeHkyZH2DXZVz",
  rating:8.8,
  summary:"Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son."},

  {Moviename:"Tenet",
  poster:"https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/tenet-resized.jpg?itok=5hmii92P",
  rating:7.4,
  summary:"A secret agent is given a single word as his weapon and sent to prevent the onset of World War III. He must travel through time and bend the laws of nature in order to be successful in his mission."},

  {Moviename:"Interstellar",
  poster:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/interstellar-et00019066-19-02-2021-02-25-12.jpg",
  rating:8.6,
  summary:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."},
  ]

  return (
    <div className="App">
      <section className="movie-list"> 
      {movies.map(({Moviename,poster,rating,summary})=>(
        <Movie
           Moviename={Moviename}
           poster={poster}
           rating={rating}
           summary={summary} />))}
      </section>
      <Counter/>
    </div>
  );
}
function Counter(){
const[like,setLike]=useState(0);
const[dislike,setDisLike]=useState(0);
return(
  <div className="counter-container">
    <button className="likes-dislikes" onClick={()=> setLike(like+1)}>👍{like}</button>
    <button className="likes-dislikes" onClick={()=> setDisLike(dislike+1)}>👎{dislike}</button>
     </div> 
);
  }
 
function Movie({Moviename,poster,rating,summary}){
  const[show,setShow]=useState(true)

  const styles={
    color:rating<8?"crimson":"green", fontWeight:"bold"};
    
  // const summaryStyle={
  //    display:show?"block":"none",
  //   };
  return(
  <div className="movie-container">
  <img className="movie-poster" alt={Moviename} src={poster}/>
  <div>
    <h3 className="movie-specs">{Moviename} </h3>
    <p className="movie-rating" style={styles}>⭐{rating}</p>
  </div>
  <button onClick={()=> setShow(!show)} className="movie-show-button">
   {show?"Hide":"Show"} Description</button>
   {show? <p className="movie-summary">{summary} </p>:""}
    <Counter/>
  </div>
   );
   }