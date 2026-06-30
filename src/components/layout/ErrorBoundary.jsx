import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      const isDev = import.meta.env.DEV;
      return (
        <div className="error-boundary-fallback">
          <div className="error-boundary-content">
            <span className="error-boundary-icon">⚠</span>
            <h3 className="error-boundary-title">Algo salió mal en esta sección</h3>
            <p className="error-boundary-message">
              Ocurrió un error inesperado. Puedes intentar recargar la sección.
            </p>
            {isDev && this.state.error && (
              <pre className="error-boundary-detail">{this.state.error.toString()}</pre>
            )}
            <button className="btn-primary" type="button" onClick={this.handleReload}>
              Recargar
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
