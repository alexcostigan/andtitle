import React from 'react'
import User from './User'

class MessageBox extends React.Component {

    
    render(){
        return(
            <section className="msger">
            <header className="msger-header">
              <div className="msger-header-title">
                <i className="fas fa-comment-alt"></i> AND Title
              </div>
              <div className="msger-header-options">
                <span><i class="fas fa-cog"></i></span>
              </div>
            </header>
          
            <main className="msger-chat">
              <div className="msg left-msg">
                <div
                 className="msg-img"
                ></div>
          
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">@Dan Roberts</div>
                    <div className="msg-info-time">12:45</div>
                  </div>
          
                  <div className="msg-text">
                    "message"
                  </div>
                </div>
              </div>
          
              <div className="msg right-msg">
                <div
                 className="msg-img"
                ></div>
          
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">@New User</div>
                    <div className="msg-info-time">12:46</div>
                  </div>
          
                  <div className="msg-text">
                    "message"
                  </div>
                </div>
              </div>
            </main>
    
          </section>
        )
    }
}

export default MessageBox