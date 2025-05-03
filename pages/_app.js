import '../styles/globals.css';
import { useEffect } from 'react';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log('Rendering MyApp component');
  }, []);

  try {
    return (
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    );
  } catch (error) {
    console.error('Error rendering MyApp:', error);
    return <div>Error occurred while rendering the application.</div>;
  }
}

export default MyApp;