import React, { useState } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToastComponent = (props) => {
  const [removeToast, setRemoveToast] = useState(false);

  return (
    <div className={removeToast ? 'remove-toast' : 'toast-comp'}>
      <div className="p-3 bg-transparent my-2 rounded">
        <Toast>
          <ToastHeader>
            <div className="toast-head">
              <p className="toast-title">Try it out!</p>
              <img
                className="close-btn-toast"
                onClick={() => setRemoveToast(true)}
                height="15em"
                src="images/icons/back.png"
                alt="Close toast"
              />
            </div>
          </ToastHeader>
          <ToastBody>You can search as you scroll the map!</ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default ToastComponent;
