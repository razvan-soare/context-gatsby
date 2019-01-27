import React, { Component, createContext } from 'react';

const context = createContext();
const { Provider, Consumer } = context;

class AppProvider extends Component {
	state = {
    currentUser: 'Dobby',
		handleLogin: user => this.handleLogin(user),
		handleLogout: () => this.handleLogout(),
  };

  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };
	

	render() {
    return (
			<Provider value={this.state}>
				{this.props.children}
			</Provider>
		)
  }
}

export default context;
export { context, AppProvider, Consumer };