import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/ui/navigation";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";
import About from "./pages/About";
import Approach from "./pages/Approach";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Book from "./pages/Book";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/approach" component={Approach} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/book" component={Book} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Router />
      </main>
      <Toaster />
    </div>
  );
}

export default App;