import { useContext } from "react";
import "./App.css";
import { Context } from "./Context";
import LyricsPage from "./Components/LyricsPage";
import SearchBox from "./Components/SearchBox";
import TrackSection from "./Components/TrackSection";
import { Provider } from "./Context";
function App() {
  const { SongID } = useContext(Context);
  return (
    <div className="app">
      {SongID === 0 ? (
        <>
          <SearchBox />
          <TrackSection />
        </>
      ) : (
        <LyricsPage ID={SongID} />
      )}
    </div>
  );
}

export default App;
