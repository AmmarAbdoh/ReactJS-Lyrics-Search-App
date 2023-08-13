import "./Style/TrackSection.css";
import { Track } from "./Track";
import { Context } from "../Context";
import React, { useContext, useState, useEffect } from "react";

const TrackSection = () => {
  const apiKey = "6e31388bd230ae6bc25f861aaf3ca54f";
  const baseUrl =
    "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/";

  const { text } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const fetchLyrics = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${baseUrl}track.search?page_size=10&page=1&q=${text}&apikey=${apiKey}`
      );
      const data = await response.json();
      setTracks(data.message.body.track_list);
    } catch (error) {
      console.error("Error fetching lyrics:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (text !== "") {
      fetchLyrics();
      setShowResults(true);
    }
  }, [text]);

  return (
    <>
      {showResults && <p className="tracks-title">Search Results</p>}
      {showResults && tracks.length === 0 && !loading && (
        <p className="tracks-title">No tracks found.</p>
      )}
      {loading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="track-section">
          {tracks.map((item, index) => (
            <Track
              key={index}
              ID={item.track.track_id}
              SongName={item.track.track_name}
              Artist={item.track.artist_name}
              Album={item.track.album_name}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TrackSection;
