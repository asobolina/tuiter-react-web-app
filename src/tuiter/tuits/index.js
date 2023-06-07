import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
  const { tuits } = useSelector(state => state.tuits)
  return(
   <ul className="list-group">
     {
       tuits.map(tuits =>
         <TuitItem
           key={tuits._id} tuits={tuits}/> )
     }
   </ul>
 );
};
export default TuitsList;