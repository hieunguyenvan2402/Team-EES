import {mxFirebase} from './mx';
import './mx.css' ;
import './index.css' ;

import riot from 'riot';
import "./tags/homepage.tag";
import route from "riot-route";


var firebaseConfig = {
  apiKey: "AIzaSyDlWq6qV75JXun8ER6R96E_sWwxFaSM7SU",
  authDomain: "hieu-camp-v2-2019.firebaseapp.com",
  databaseURL: "https://hieu-camp-v2-2019.firebaseio.com",
  projectId: "hieu-camp-v2-2019",
  storageBucket: "hieu-camp-v2-2019.appspot.com",
  messagingSenderId: "238210138694",
  appId: "1:238210138694:web:9d017ae6eb8a28a4"
};


mxFirebase.init(firebaseConfig);

route.base("/");

route("/home", () =>{
  const homePage = riot.mount("div#root","homepage");
  



})






route.start(true)

