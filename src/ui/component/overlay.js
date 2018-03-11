import React from 'react';


var Overlay =(props)=>{
   return props.state.overlay
          ? (<div className={"modal is-active" }>
              <div className="modal-background"></div>
              <div className="modal-content box">
                <h1 className="is-size-5">
                  {props.state.overlay.title}
                </h1>
                <div className="content">
                {props.state.overlay.body.length
                  ? props.state.overlay.body.map((message) =>
                  <div key={message.key}>
                      {message.body}
                  </div>)
                  : props.state.overlay.body}
                </div>
              </div>
           </div>)
         : null
}


export default Overlay;
