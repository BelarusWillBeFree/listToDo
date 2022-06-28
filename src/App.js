// @ts-check
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import getModal from './modals/index.js';

// BEGIN (write your solution here)

const App = () => {
  const initState = {
    mode: '',
    listToDo: [],
    currentText: '',
    currentId: 0,
    showAdd: false,
  };
  const [stateApp, setStateApp] = useImmer(initState);
  const handleShowAdd = () => {
    setStateApp(draft => {
      draft.showAdd = true;
    });
  }
  const handleEdit = (id)=> (event) => {
    setStateApp(draft => {
      const [foundById] = draft.listToDo.filter(elem => elem.id === id);
      draft.currentId = id;
      draft.currentText = foundById.text;
      draft.mode = 'renaming';
    });
  }
  const hamdleDelete = (id) => (event) => {
    setStateApp(draft => {
      const [foundById] = draft.listToDo.filter(elem => elem.id === id);
      draft.currentId = id;
      draft.currentText = foundById.text;
      draft.mode = 'removing';
    });
  }
  return (
    <React.Fragment>
      <div className="mb-3">
        <button type="button" onClick={handleShowAdd} data-testid="item-add" className="btn btn-secondary">add</button>
      </div>
      {stateApp.listToDo.map(({id, text}) => (
      <div key={id}>
        <span className="mr-3">{text}</span>
        <button type="button" onClick={handleEdit(id)} className="border-0 btn btn-link mr-3 text-decoration-none" data-testid="item-rename">rename</button>
        <button type="button" onClick={hamdleDelete(id)} className="border-0 btn btn-link text-decoration-none" data-testid="item-remove">remove</button>
      </div>
      ))}
      {getModal('adding')({ stateApp, setStateApp })}
      {getModal('renaming')({ stateApp, setStateApp })}
      {getModal('removing')({ stateApp, setStateApp })}
    </React.Fragment>
  );
}

export default App;
// END
