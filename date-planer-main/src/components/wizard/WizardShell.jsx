import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../ui/AnimatedPage";
import StepFood from "./StepFood";
import StepActivity from "./StepActivity";
import StepTime from "./StepTime";
import ConfirmationScreen from "../ConfirmationScreen";
import ProgressBar from "../ui/ProgressBar";
import { useDateStore } from "../../store/useDateStore";

const STEPS = [StepFood, StepActivity, StepTime];

export default function WizardShell() {
  const { currentStep } = useDateStore();

  if (currentStep >= STEPS.length) {
    return <ConfirmationScreen />;
  }

  const StepComponent = STEPS[currentStep];

  return (
    <div className="flex flex-col min-h-[100dvh] bg-pink-50 relative overflow-hidden">
      {/* Cute background decoration */}
      <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-mint-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="z-10 w-full max-w-md mx-auto flex flex-col flex-1 relative">
        <ProgressBar total={STEPS.length} current={currentStep} />
        
        <div className="flex-1 flex flex-col justify-center relative">
          <AnimatePresence mode="wait">
            <AnimatedPage key={currentStep}>
              <StepComponent />
            </AnimatedPage>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
