import React from 'react';

var Console = (props)=>{
    return (
      <div className="tile is-child box">
      <h1 className="is-size-5">Console</h1>
        <ul>
          {props.state.messages.map((message,key) => 
            <li key={message.id}>
                <span>[{message.time}]</span> 
                <span>{message.body}</span>
            </li>
          )}
        </ul>
      </div>
    );
  }

export default Console;
