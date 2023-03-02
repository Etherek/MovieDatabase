import { Route, Router } from 'react-router-dom';
import Gallery from './Gallery';
import LoginPage from './LoginPage';
import InfiniteScroller from './Scroller';
import Sticker from './Sticker';

function MainPage() {
    return (
      <div>
      <Sticker></Sticker>
      <Gallery></Gallery>
      <InfiniteScroller></InfiniteScroller>
      </div>
    );
  }

export default MainPage