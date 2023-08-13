import { useContext } from "react";
import { Context } from "../Context";
import "./Style/Track.css";
export const Track = ({ ID, SongName, Artist, Album }) => {
  const { setSongID, setSongName } = useContext(Context);

  const handleOpenLyrics = () => {
    setSongID(ID);
    setSongName(SongName);
  };

  return (
    <>
      <div className="track">
        <p className="song-name">{SongName}</p>
        <p className="track-name">Artist: {Artist}</p>
        <p className="album">Album: {Album}</p>
        <button className="button track-button" onClick={handleOpenLyrics}>
          View Lyrics
        </button>
      </div>
    </>
  );
};
