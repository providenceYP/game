import React from 'react';

import ErrorComponent from 'components/ErrorComponent';

import { Props, State } from './types';

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    return this.state.error ? (
      <ErrorComponent code={500} text={this.state.error.message} />
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
