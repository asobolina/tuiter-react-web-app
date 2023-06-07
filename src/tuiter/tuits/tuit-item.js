import '@fortawesome/fontawesome-free/css/all.min.css';
import {useDispatch} from "react-redux";
import { createTuit, deleteTuit } from '../reducers/tuits-reducer';
import React from "react";
import ReactDOM from 'react-dom/client';

const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuit(id));
}


const TuitItem = (
 {
   tuit = {
     "userName": "SpaceX",
     "time": "2h",
     "handle": "@spacex",
     "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
     "image": "spacex.png",
     "liked": "true",
     "likes": "432",
     "retuits": "123",
     "replies": "678"
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
   <div className="col-2">
       <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
     </div>
     <div className="col-10">
       <div>{<b>{tuit.userName}</b>} . {tuit.handle} . {tuit.time}</div>
       <div>{tuit.tuit}</div><br/>
       <div>
        <i className="fas fa-comment fa-lg"></i> {tuit.replies}&emsp;&emsp;
        <i className="fas fa-share fa-lg"></i> {tuit.retuits}&emsp;&emsp;
        <i className="fas fa-heart fa-lg"></i> {tuit.likes}
      </div>
     </div>
     <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
   </div>
  </li>
 );
};
export default TuitItem;