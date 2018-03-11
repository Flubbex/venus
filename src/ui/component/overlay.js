import React from 'react';

    
var Overlay =(props)=>{
   return <div className={props.state.overlay ? "modal is-active" : "modal"}>
              <div className="modal-background"></div>
              <div className="modal-content box">
                <h1 className="is-size-5">
                  {props.state.overlay.title}
                </h1>
                <div className="content">
                {props.state.overlay ? props.state.overlay.body.map((message) => 
                  <div key={message.key}>
                      {message.body}
                  </div>
                ): null}
                </div>
              </div>
          </div>
}


export default Overlay;
