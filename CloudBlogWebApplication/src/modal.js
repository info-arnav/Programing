import React from "react";
import { render } from "react-dom";

const Modal = (props) => {
  let { stringBody } = props;
  return (
    <div class="container">
      <button
        type="button"
        class="btn btn-outline-primary btn-sm"
        data-toggle="modal"
        data-target="#myModal"
      >
        View The Full Post
      </button>
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">{stringBody[3]}</h4>
            </div>
            <div class="modal-body">
              <p>{stringBody}</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
