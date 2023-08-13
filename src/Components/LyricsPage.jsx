import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
import "./Style/LyricsPage.css";

const LyricsPage = ({ ID }) => {
  const { setSongID, setSongName, SongName } = useContext(Context);
  const apiKey = "6e31388bd230ae6bc25f861aaf3ca54f";
  const baseUrl =
    "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/";
  const [loading, setLoading] = useState(true);
  const [lyrics, setLyrics] = useState("");

  const fetchLyrics = async () => {
    try {
      const response = await fetch(
        `${baseUrl}track.lyrics.get?track_id=${ID}&apikey=${apiKey}`
      );
      const data = await response.json();

      if (data.message.body.lyrics.lyrics_body != "")
        setLyrics(data.message.body.lyrics.lyrics_body);
      else setLyrics("No lyrics found for this song (Missing Data)");
    } catch (error) {
      setLyrics("No lyrics found for this song (Missing Data)");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLyrics();
  }, []);

  const handleClick = () => {
    setSongID(0);
    setSongName("");
  };

  return (
    <>
      <div>
        {loading ? (
          <div className="loading-spinner" style={{ marginTop: "5vw" }}></div>
        ) : (
          <div className="lyrics-div">
            <button className="button back-button" onClick={handleClick}>
              Back
            </button>
            <h1 className="song-name">{SongName}</h1>
            <div className="lyrics-body">{lyrics}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default LyricsPage;
