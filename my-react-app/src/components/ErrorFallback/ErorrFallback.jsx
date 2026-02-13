function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="alert">
      <h2>Oh no, something went wrong</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback;
