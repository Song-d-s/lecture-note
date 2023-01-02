import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome Back to React.js</h1>
      <Button text="Continue" />
    </div>
  );
}

export default App;
