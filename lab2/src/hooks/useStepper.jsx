import { useState } from 'react';

function useStepper(initialStep = 0, maxSteps) {
    const [currentStep, setCurrentStep] = useState(initialStep);

    const next = () => {
        if (currentStep < maxSteps - 1) {
            setCurrentStep(prevStep => prevStep + 1);
        }
    };

    const prev = () => {
        if (currentStep > 0) {
            setCurrentStep(prevStep => prevStep - 1);
        }
    };

    const reset = () => setCurrentStep(initialStep);

    return {
        currentStep,
        next,
        prev,
        reset
    };
}

export default useStepper;