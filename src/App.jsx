import Button from "./components/ui/Button.jsx";
import Card from "./components/ui/Card.jsx";
import Input from "./components/ui/Input.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import SkipToContent from "./components/ui/SkipToContent";

function App() {
  return (
    <ErrorBoundary>
      <SkipToContent />

        <AppRoutes />
    </ErrorBoundary>
  );
}

export default App;