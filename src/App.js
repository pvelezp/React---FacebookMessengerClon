import React, { useState, useEffect} from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input} from '@material-ui/core'
import Message from './Message';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send'
import { IconButton } from '@material-ui/core';

function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')


  useEffect(() => {
    //run once when the app component loads
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  },[] )

  const sendMessage = (event) => {
    // all the logic to send the message goes here
    event.preventDefault()

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
   
  }

  return (
    <div className="App">
      <img src="data:image/png;base64,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" />
      <h1>Hello Clever programmers</h1>

  <h2>Welcome: {username}</h2>
      <form  className="app__form">

      <FormControl className="app__formControl">
        
        <Input className="app__input" placeholder='Enter a message...' value={input} 
          onChange={event => setInput(event.target.value)} />
        
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
        <SendIcon />
        </IconButton>

       
      </FormControl>    
      </form>
      <FlipMove>
      {
       messages.map(({id,message}) => (

        <Message key={id} username={username}
        message={message} 
        />

       ))
     }
      </FlipMove>

    </div>
  );
}

export default App;
