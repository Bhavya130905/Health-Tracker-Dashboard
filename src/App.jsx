import Button from "./components/ui/Buttons.jsx";
import Card from "./components/ui/Card.jsx";
import Input from "./components/ui/Input.jsx";

function App() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <Card className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-slate-800">
          VitalSync UI Test
        </h1>

        <Input
          label="Full Name"
          placeholder="Enter your name"
        />

        <div className="flex gap-3">
          <Button>Primary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </Card>
    </main>
  );
}

export default App;