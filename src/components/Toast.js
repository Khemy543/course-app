import { addNotification } from 'actions/indexActions';
import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToastNotification = (props) => {
  return (
    <div style={{zIndex:2000, position:"absolute", top:30, right:30}}>
      <div className={`p-3 bg-${props.color} my-2 rounded white`}>
        <Toast isOpen={props.showToast} transition>
          <ToastHeader toggle={()=>props.dispatch(addNotification({}))}>
            {props.title}
          </ToastHeader>
          <ToastBody>
            {props.text}
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default ToastNotification;