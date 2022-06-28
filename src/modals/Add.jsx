import React, { useEffect, useRef } from 'react';
import _ from 'lodash';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

// BEGIN (write your solution here)
const Add = ({ stateApp, setStateApp }) => {
  const inputEl = useRef(null);
  const handleClose = () => setStateApp(draft => {draft.showAdd = false;});
  useEffect(()=>{
    if (inputEl.current) {
      inputEl.current.focus();
     }
  });

  const handleChangeTask = (event) => {
    setStateApp(draft => {
      draft.currentText = event.target.value;
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setStateApp(draft => {
      const id = _.uniqueId();
      draft.listToDo.push({id, text:draft.currentText});
      draft.currentText = '';
      draft.showAdd = false;
    });
  }
  return (
    <Modal show={stateApp.showAdd} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input className="form-control" onChange={handleChangeTask} ref={inputEl} data-testid="input-body" name="body" required="" value={stateApp.currentText} />
          </div>
          <input className="btn btn-primary" type="submit" value="submit" />
        </form>
    </Modal.Body>
  </Modal>
  );
}

export default Add;
// END
