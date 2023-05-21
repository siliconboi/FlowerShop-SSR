import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(`caught ${error} error. more info: ${info}`);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <Link to="/">go back to home</Link>
        </div>
      );
    }
    return this.props.children;
  }
}

export { ErrorBoundary };
