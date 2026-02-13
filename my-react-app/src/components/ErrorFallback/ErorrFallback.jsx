function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h2>Oh no, something went wrong: {error.message}</h2>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback;
