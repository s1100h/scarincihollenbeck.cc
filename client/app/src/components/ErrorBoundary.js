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
    console.log('error in catch');
    console.log(error);
    console.log('errorInfo in catch');
    console.log(errorInfo);
    this.setState({
      error,
      errorInfo
    });
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    console.log('error');
    console.log(error);
    if(error) {
      return <Page404 />
    }

    return children;
  } 
};

export default ErrorBoundary;