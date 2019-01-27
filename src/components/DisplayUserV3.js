// src/components/DisplayUserV3.js
import React from 'react';
import withContext from '../helpers/withContext';

const DisplayUserV3 = (props) => {
  const { currentUser } = props.store;
  return (
    <div>
      Hello, {currentUser}! 🎉
    </div>
  )
}

export default withContext(DisplayUserV3);