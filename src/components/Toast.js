import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { MyContextConsumer } from '../context.js';

const ToastNotification = (props) => {
  return (
    <MyContextConsumer>
    {value=>(
    <div style={{zIndex:1000}}>
      <div className={`p-3 bg-"${props.color} my-2 rounded white`}>
        <Toast isOpen={value.showToast}>
          <ToastHeader>
            {props.title}
          </ToastHeader>
          <ToastBody>
            {props.text}
          </ToastBody>
        </Toast>
      </div>
    </div>
    )}
    </MyContextConsumer>
  );
};

export default ToastNotification;