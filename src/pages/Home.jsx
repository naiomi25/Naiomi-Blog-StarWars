import { Link } from "react-router-dom";

export const Home = () => {

  
  return (
    <div className="container text-center mt-1 home">
      <h1 className="texto">Bienvenid@ al universo Star Wars</h1>
      

      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-4 contenedorImagenesHome">
        <div className=" d-flex justify-content-center flex-column gap-3 align-items-center">  
          <img className='imagenHome' src =' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9O2WLKN-R5epnVQKJtwieqJAgpKruryDK5w&s'/>
          <Link to="/planets" className="btn btn-outline-dark linksHome">
           <strong className="texto">PLANETAS</strong> 
          </Link>
        </div>
        <div className=" d-flex justify-content-center flex-column gap-3 align-items-center">  
          <img className='imagenHome' src="https://s1.elespanol.com/2023/09/13/bluper/series/794181327_236025454_1706x1280.jpg"/>
          <Link to="/starships" className="btn btn-outline-dark linksHome">
            <strong className="texto">NAVES</strong>
          </Link>
        </div>
        <div className=" d-flex justify-content-center flex-column gap-3 align-items-center">  

          <img className='imagenHome' src="https://i.blogs.es/f66fa2/star-wars/500_333.jpeg"/>
          <Link to="/people" className="btn btn-outline-dark linksHome">
           <strong className="texto">PERSONAJES</strong> 
          </Link>
        </div>
      </div>
    </div>
  );
};