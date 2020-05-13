import React, { Component } from 'react';
import Page404 from '../pages/page404';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if(error) {
      return <Page404 />
    }

    return children;
  } 
};

export default ErrorBoundary;