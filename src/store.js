export const initialStore=()=>{
  return{
    
    people: [],
    planets: [],
    starships : [],
    favorites : [],
    person : null,
    planet : null,
    starship : null
     
    
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_people':
      
      return {
       ...store,
      people : action.payload
      };
    
    case 'get_planets':

      return{
       ...store,
       planets : action.payload
      }

    case 'get_starship':

    return{
      ...store,
      starships : action.payload
    }
    case 'detail_starship':

    return{
      ...store,
      starship : action.payload
    }
    case 'detail_planet':

    return{
      ...store,
      planet : action.payload
    }
    case 'detail_person':

    return{
      ...store,
      person : action.payload
    }

    case 'add-favorite':
      return{
      ...store,
      favorites: [...store.favorites,action.payload]
    
    }
    case 'delete-favorite':
      return{
      ...store,
      favorites: store.favorites.filter((e)=> e.name !== action.payload.name)
    
    }
  }    

}
