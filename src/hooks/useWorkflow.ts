import { useState } from 'react'
import { services, type LanguageCode, type Service, type WorkflowStepId } from '../data/services'

export function useWorkflow(selectedLanguage: LanguageCode) {
  const [selectedService] = useState<Service['id']>('eshram')
  const [currentWorkflowStep, setCurrentWorkflowStep] = useState<WorkflowStepId>('USER_NEED')
  const [workflowStarted, setWorkflowStarted] = useState(false)

  const workflow = services.find((service) => service.id === selectedService)?.workflow ?? []
  const currentStepIndex = workflow.findIndex((step) => step.id === currentWorkflowStep)
  const currentStep = workflow[currentStepIndex]
  const hasNextStep = currentStepIndex >= 0 && currentStepIndex < workflow.length - 1
  const hasPreviousStep = currentStepIndex > 0

  function startWorkflow() {
    setWorkflowStarted(true)
    setCurrentWorkflowStep('USER_NEED')
  }

  function nextStep() {
    if (currentStepIndex >= 0 && currentStepIndex < workflow.length - 1) {
      setCurrentWorkflowStep(workflow[currentStepIndex + 1].id)
    }
  }

  function previousStep() {
    if (currentStepIndex > 0) {
      setCurrentWorkflowStep(workflow[currentStepIndex - 1].id)
    }
  }

  function resetWorkflow() {
    setCurrentWorkflowStep('USER_NEED')
    setWorkflowStarted(false)
  }

  return {
    selectedLanguage,
    selectedService,
    workflow,
    currentWorkflowStep,
    currentStep,
    hasNextStep,
    hasPreviousStep,
    workflowStarted,
    startWorkflow,
    nextStep,
    previousStep,
    resetWorkflow,
  }
}