import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

// BEGIN (write your solution here)
const Rename = ({ stateApp, setStateApp }) => {
  const inputEl = useRef(null);
  const handleClose = () => setStateApp(draft => {draft.mode = '';});
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
      const newList = draft.listToDo.map(({id, text}) => (
        id === draft.currentId ? {id: draft.currentId, text: draft.currentText} : {id, text}));
      draft.listToDo = newList;
      draft.currentText = '';
      draft.mode = '';
    });
  }
  return (
    <Modal show={stateApp.mode==='renaming'} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Rename</Modal.Title>
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
export default Rename;
// END
