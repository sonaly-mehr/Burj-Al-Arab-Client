import React, { useState } from 'react';
import './Room.css';
// import { useHistory } from 'react-router-dom';
import RoomDetails from '../RoomDetails/RoomDetails';
import fakeData from '../../components/FakeData/FakeData.json';


export default function Room() {
  const data = fakeData.slice(0, 10);
  const [roomData, setRoomData] =useState(data);
  // const history = useHistory()
  // const handleBook = (bedType) => {
  //   history.push(`/book/${bedType}`);
  // }

  return (
    <div className="rooms-section">
      <div className="row">
        {
          roomData.map(book => <RoomDetails book={book}></RoomDetails>)
        }
      </div>
    </div>
  );
}
