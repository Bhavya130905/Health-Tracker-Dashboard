import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error(error);
    console.error(info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-300px flex-col items-center justify-center rounded-3xl border border-red-300 bg-red-50 p-8 text-center dark:border-red-700 dark:bg-red-900/20">
          <h2 className="text-2xl font-bold text-red-600">
            Something went wrong
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Please refresh the page.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;