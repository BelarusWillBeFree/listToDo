import React from 'react';
import { Modal, FormGroup } from 'react-bootstrap';

// BEGIN (write your solution here)
const Remove = ({ stateApp, setStateApp }) => {

  const handleClose = () => setStateApp(draft => {draft.mode = '';});

  const handleSubmit = (event) => {
    event.preventDefault();
    setStateApp(draft => {
      const newList = draft.listToDo.filter(({id}) => (id !== draft.currentId ));
      draft.listToDo = newList;
      draft.currentText = '';
      draft.mode = '';
    });
  }
  return (
    <Modal show={stateApp.mode==='removing'} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Remove</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form onSubmit={handleSubmit}>
          <input className="btn btn-danger" type="submit" value="remove" />
        </form>
    </Modal.Body>
  </Modal>
  );
}
export default Remove;
// END
