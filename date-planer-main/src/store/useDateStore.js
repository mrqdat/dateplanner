import { create } from "zustand";

export const useDateStore = create((set) => ({
  currentStep: 0,
  sessionId: null,
  food: null,
  activity: null,
  time: null,

  setStep: (step) => set({ currentStep: step }),
  nextStep: () => set((s) => ({ currentStep: s.currentStep + 1 })),
  setSessionId: (sessionId) => set({ sessionId }),
  setFood: (food) => set({ food }),
  setActivity: (activity) => set({ activity }),
  setTime: (time) => set({ time }),
  reset: () => set({ currentStep: 0, sessionId: null, food: null, activity: null, time: null }),
}));

