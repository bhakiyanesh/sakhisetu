import {
  progressLabels,
  type LanguageCode,
  type WorkflowStep,
  type WorkflowStepId,
} from '../data/services'

type ProgressTrackerProps = {
  steps: WorkflowStep[]
  currentWorkflowStep: WorkflowStepId
  workflowStarted: boolean
  selectedLanguage: LanguageCode
}

export function ProgressTracker({
  steps,
  currentWorkflowStep,
  workflowStarted,
  selectedLanguage,
}: ProgressTrackerProps) {
  const currentStepIndex = steps.findIndex((step) => step.id === currentWorkflowStep)
  const isLastStep = currentStepIndex === steps.length - 1
  const phaseLabel = !workflowStarted
    ? progressLabels[0]
    : currentStepIndex === 0
      ? progressLabels[1]
      : isLastStep
        ? progressLabels[3]
        : progressLabels[2]

  return (
    <nav
      aria-label={phaseLabel[selectedLanguage]}
      className={workflowStarted ? 'progress-tracker is-started' : 'progress-tracker'}
    >
      <p className="progress-caption" aria-live="polite">{phaseLabel[selectedLanguage]}</p>
      <ol className="progress-steps">
        {steps.map((step, index) => {
          const status = !workflowStarted
            ? 'upcoming'
            : index < currentStepIndex
              ? 'completed'
              : index === currentStepIndex
                ? 'current'
                : 'upcoming'

          return (
            <li
              aria-current={status === 'current' ? 'step' : undefined}
              aria-label={`${step.title[selectedLanguage]}: ${status}`}
              className={`progress-step is-${status}`}
              key={step.id}
              title={step.title[selectedLanguage]}
            >
              <span>{status === 'completed' ? '✓' : index + 1}</span>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}