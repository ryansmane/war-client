import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Player } from '../classes/Player';


function RoomList(props) {
    let socket = props.socket;
    const [roomList, setRoomList] = useState(); 
    const [roomName, setRoomName] = useState();
    const [waiting, setWaiting] = useState(false);

    useEffect(() => {
        socket.on('return-rooms', (rooms) => {
            setRoomList(Object.values(rooms));
        });

        socket.on('all-players-in', id => {
            props.routerProps.history.push(`/cardroom/${id}`);
        })
    })


    const createRoom = (e) => {
        e.preventDefault();
        setWaiting(true);
        let p = new Player(socket.id)
        let roomData = {
            host: socket.id,
            name: roomName,
            player: p,
            capacity: 2
        };
        socket.emit('create-room', roomData);
        
    }

    const joinRoom = (host, name, e) => {
        setWaiting(true)
        e.preventDefault();
        let player = new Player(socket.id);
        socket.emit('join-room', {host, player, name})
        
    }

    return (
        <div>
            {!waiting && (
                <>
            <h3>RoomList</h3>
            <ul>
                {roomList && roomList.map(room => {
                    if (room.capacity > Object.keys(room.players).length) {
                        return (
                        <li>Name:{room.name} | Members: {Object.keys(room.players).length} / {room.capacity} <button onClick={(e) => joinRoom(room.host, room.name, e)}>Join Room</button></li> 
                        )
                    }
                })}
            </ul>   
            <form className='ifield'>
                <input type='text' onChange={(e) => setRoomName(e.target.value)}/>
                <button type='button' onClick = {(e) => createRoom(e)}>Create Room</button> 
            </form>
            </>)}
            {waiting && (
                <h1>Waiting for more players...</h1>
            )}
        </div>
    )
}

export default RoomList;