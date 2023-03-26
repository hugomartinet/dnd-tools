import React, { useCallback, useContext, useMemo, useState, type PropsWithChildren } from 'react'

export const steps = ['Race', 'Classe', 'Historique', 'Compétences', 'Equipement'] as const
type Step = (typeof steps)[number]

interface CharacterFormContextValue {
  currentStep: Step
  goToStep: (step: Step) => void
  goToPreviousStep: () => void
  goToNextStep: () => void
  canGoPrevious: boolean
  canGoNext: boolean
}

const CharacterFormContext = React.createContext<CharacterFormContextValue>({
  currentStep: steps[0],
  goToStep: () => {},
  goToPreviousStep: () => {},
  goToNextStep: () => {},
  canGoPrevious: false,
  canGoNext: false,
})

export function useCharacterFormContext() {
  return useContext(CharacterFormContext)
}

export function CharacterFormContextProvider({ children }: PropsWithChildren) {
  const [currentStep, setCurrentStep] = useState<Step>(steps[0])

  const canGoPrevious = useMemo(() => currentStep !== steps[0], [currentStep])
  const canGoNext = useMemo(() => currentStep !== steps[steps.length - 1], [currentStep])

  const goToPreviousStep = useCallback(() => {
    const stepIndex = steps.indexOf(currentStep)
    setCurrentStep(steps[stepIndex - 1])
  }, [currentStep])

  const goToNextStep = useCallback(() => {
    const stepIndex = steps.indexOf(currentStep)
    setCurrentStep(steps[stepIndex + 1])
  }, [currentStep])

  return (
    <CharacterFormContext.Provider
      value={{ currentStep, goToStep: setCurrentStep, goToPreviousStep, goToNextStep, canGoPrevious, canGoNext }}
    >
      {children}
    </CharacterFormContext.Provider>
  )
}
