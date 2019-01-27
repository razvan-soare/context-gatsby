// src/components/DisplayUserV2.js
import React, { useContext } from 'react';
import { context } from '../store/context';

const DisplayUserV2 = () => {
  const { currentUser } = useContext(context);
  return (
    <div>
      Hello, {currentUser}! 🎉
    </div>
  )
}

export default DisplayUserV2;