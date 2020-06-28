import React, { FunctionComponent } from "react";
import { render } from "react-dom";

const Modal: FunctionComponent = (props) => {
  let { stringBody } = props;
  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-outline-primary btn-sm"
        data-toggle="modal"
        data-target="#myModal"
      >
        View The Full Post
      </button>
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{stringBody[3]}</h4>
            </div>
            <div className="modal-body">
              <p>{stringBody}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
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
