import { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import WizardShell from "./wizard/WizardShell";

export default function ReceiverFlow() {
  const [started, setStarted] = useState(false);

  return started ? (
    <WizardShell />
  ) : (
    <WelcomeScreen onStart={() => setStarted(true)} />
  );
}
