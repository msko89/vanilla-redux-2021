import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDelete: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(function ToDo({ text, onDelete, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onDelete}>DEL</button>
    </li>
  );
});
