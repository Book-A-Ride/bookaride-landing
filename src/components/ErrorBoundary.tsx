import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: "" };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            fontFamily: "Inter, sans-serif",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "2rem" }}>🚗</p>
          <h1 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
            Something went wrong
          </h1>
          <p style={{ fontSize: "0.875rem", color: "#64748b", maxWidth: "30rem" }}>
            {this.state.message || "An unexpected error occurred. Please reload the page."}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "0.5rem",
              borderRadius: "9999px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
