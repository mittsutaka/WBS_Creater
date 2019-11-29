import { createStore as reduxCreateStore, combineReducers } from "redux";
import * as reducers from './reducers';

export type AppState ={

}

const createStore = ()=> {
    const store = reduxCreateStore(combineReducers<AppState>({
        ...reducers
     }));
     return store;
};
   
export default createStore;
