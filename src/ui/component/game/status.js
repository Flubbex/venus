import React from 'react';

var Status = (props)=>{
  return (
    <div className="tile is-parent box">
      <div className="tile is-child">
        <h1 className="is-size-5">Status</h1>
        <ul>
          <li>Name:   {props.state.player.name}             </li>
          <li>Time:   {props.state.time}                    </li>
          <li>Health: {props.state.player.health.join('/')} </li>
          <li>Mana:   {props.state.player.mana.join('/')}   </li>
          <li>XL:     {props.state.player.xl}               </li>
          <li>AC:     {props.state.player.ac}               </li>
          <li>EV:     {props.state.player.ev}               </li>
          <li>EXP:    {props.state.player.exp} (0% TNL)     </li>
        </ul>
      </div>
      
      <div className="tile is-child">
        <h1 className="is-size-5">Attributes</h1>
        <ul>
          <li><span>Strength:</span> 
              <span>{props.state.player.attributes.strength}</span>
          </li>
          <li>
              <span>Dexterity:</span>
              <span>{props.state.player.attributes.dexterity}</span>
          </li>
          <li>
              <span>Intelligence:</span>
              <span>{props.state.player.attributes.intelligence}</span>
          </li>
        
        </ul>
        <h1 className="is-size-5">Affects</h1>
        <ul>
          <li>None</li>
        </ul>
      </div>
    </div>
  );
}

export default Status;
