import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {PLAYLISTS} from '../constants'

  /* 
   *  display list of terms (year, semester) from SEMESTERS list
   *  user selects from the list displayed and can view schedule
   */
function UserHome( ) {

  const [playlistId, setPlaylistId] = useState(-1);

  const onRadioClick = (event) => {
    const row_id = event.target.parentNode.parentNode.rowIndex - 1;
    console.log("radioClick "+row_id);
    setPlaylistId(row_id);
  }

  // playlist id, user id, playlist name, playlist size

  const headers = [' ', 'userId', 'playlistName', 'playlistSize'];  

  return(
    <div margin="auto" >
        <h2>User's Playlist Route</h2>
      <table className="Center"> 
        <thead>
          <tr>
            {headers.map((h, idx) => (<th key={idx}>{h}</th>))}
          </tr>
        </thead>
        <tbody>
          {PLAYLISTS.map((t,idx) => (
            <tr key={idx}>
              <td><input type="radio"  name="playlistId" onClick={onRadioClick}/></td>
              <td>{t.playlistName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link id="showPlaylist" to={`/playlist?playlistId=${playlistId}`} > Show Playlist </Link>
    </div>
  );
}
export default UserHome;