import {FETCH_WEATHER} from '../actions/index.js';

export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
      //spread syntax creates new copy without mutating original arrays.
      return [...state, action.payload.data];
      break;

    default: 
      return state;
  }
}


