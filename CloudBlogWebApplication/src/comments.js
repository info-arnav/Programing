import React, { Component, useState, useCallback, useEffect } from "react";
import { render } from "react-dom";
const Comments = () => {
  const [Data, setData] = useState("");
  const [State, setState] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/comment/array").then((response) =>
      response.text().then((e) => setData(e))
    );
  });
  render(
    <div>
      <div class="comment_block">
        <div class="create_new_comment">
          <form action="http://localhost:9000/comments" method="POST">
            <div class="user_avatar">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/73.jpg" />
            </div>
            <div class="input_comment">
              <input type="text" placeholder="Join the conversation.." />
            </div>
          </form>{" "}
          <div class="comment_block">
            <div class="create_new_comment">
              <form action="http://localhost:9000/comments" method="POST">
                <div class="user_avatar">
                  <img src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/73.jpg" />
                </div>
                <div class="input_comment">
                  <input type="text" placeholder="Join the conversation.." />
                </div>
              </form>
            </div>

            <div class="new_comment">
              <ul class="user_comment">
                <div class="user_avatar">
                  <img src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/73.jpg" />
                </div>
                <div class="comment_body">
                  <p>
                    Gastropub cardigan jean shorts, kogi Godard PBR&B lo-fi
                    locavore. Organic chillwave vinyl Neutra. Bushwick Helvetica
                    cred freegan, crucifix Godard craft beer deep v mixtape
                    cornhole Truffaut master cleanse pour-over Odd Future beard.
                    Portland polaroid iPhone.
                  </p>
                </div>

                <div class="comment_toolbar">
                  <div class="comment_details">
                    <ul>
                      <li>
                        <i class="fa fa-clock-o"></i> 13:94
                      </li>
                      <li>
                        <i class="fa fa-calendar"></i> 04/01/2015
                      </li>
                      <li>
                        <i class="fa fa-pencil"></i>{" "}
                        <span class="user">John Smith</span>
                      </li>
                    </ul>
                  </div>
                  <div class="comment_tools">
                    <ul>
                      <li>
                        <i class="fa fa-share-alt"></i>
                      </li>
                      <li>
                        <i class="fa fa-reply"></i>
                      </li>
                      <li>
                        <i class="fa fa-heart love"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <h1>{Data}</h1>
          {
            //for(){}
          }
        </div>
      </div>
    </div>
  );
};

export default Comments;
