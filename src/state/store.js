import {
    legacy_createStore,
    applyMiddleware,
    combineReducers,
    compose,
  } from "redux";
  import thunk from "redux-thunk";
  import {Authreducer} from "./Authentication/Authreducer"
 
  
  const composeEnhancer = window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let rootreducer = combineReducers({
    Auth:Authreducer
    
  });
  
  export const store = legacy_createStore(
    rootreducer,
    composeEnhancer(applyMiddleware(thunk))
  );