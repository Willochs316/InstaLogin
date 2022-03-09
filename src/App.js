import LoginForm from "./Components/LoginForm";
import LoginImage from "./Components/LoginImage";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <LoginForm loginSlides={LoginImage} />
    </div>
  );
}
