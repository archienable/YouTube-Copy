import './App.css';
import SideBar from "./Components/SideBar/SideBar";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoDetails from "./Components/VideoDetails/VideoDetails";
import Channel from "./Components/Content/Channel/Channel";
import VideosTab from "./Components/Content/Channel/Tabs/VideosTab/VideosTab";
import ShortsTab from "./Components/Content/Channel/Tabs/ShortsTab/ShortsTab";
import SearchResults from "./Components/SearchResults/SearchResults";


function App() {

  const [isActiveBurger, setIsActiveBurger] = useState(false)

  const isOpenBurger = () => setIsActiveBurger(!isActiveBurger)

  return (
    <BrowserRouter>
      <div className="App">
        <Header isOpenBurger={isOpenBurger} isActiveBurger={isActiveBurger} />
        <div>
          <SideBar isActiveBurger={isActiveBurger} />
          <div className='contentContainer'>
            <Routes>
              <Route path='/' element={ <Content /> } />
              <Route path='/channel/:channelId' element={ <Channel /> } />
              <Route path='/video/:videoId' element={<VideoDetails /> }/>
              <Route path='/videos/' element={<VideosTab /> }/>
              <Route path='/shorts/' element={<ShortsTab /> }/>
              <Route path='/results/' element={<SearchResults /> }/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
