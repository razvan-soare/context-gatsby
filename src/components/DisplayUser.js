import React from 'react';
import { Consumer } from '../store/context';

const DisplayUser = () => (
  <Consumer>
    {store => (
      <div>
        Hello, {store.currentUser}! 🎉
      </div>
    )}
  </Consumer>
);

export default DisplayUser;