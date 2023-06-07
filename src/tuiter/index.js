import {Route, Routes} from "react-router-dom";
import BookmarksScreen from "./bookmarks-screen/bookmarks-screen.js";
import ExploreScreen from "./explore-screen/index.js";
import HomeScreen from "./home-screen/index.js";
import NavigationSidebar from "./navigation-sidebar.js";
import ProfileScreen from "./profile-screen/index.js";
import WhoToFollowList from "./who-to-follow/index.js";
import WhoToFollowListItem from "./who-to-follow/who-to-follow-list-item.js";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer.js";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import Nav from "../nav.js";
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}});


function Tuiter() {
    return (
        <Provider store={store}>
             <Nav/>
       <div className="row">
        <div className="col-2">
            <NavigationSidebar/>
        </div>

        <div className="col-7">
            <Routes>
                <Route path="home" element={<HomeScreen/>} />
                <Route path="explore" element={<ExploreScreen/>} />
                <Route path="otifications" element={<h1>Notifications</h1>} />
                <Route path="messages" element={<h1>Messages</h1>} />
                <Route path="bookmarks" element={<BookmarksScreen/>} />
                <Route path="profile" element={<ProfileScreen/>} />
            </Routes>
        </div>
            <div className="col-3">
                <WhoToFollowList/>
            </div>
       </div>
       </Provider>
    );
 }
 export default Tuiter
 