import clsx from 'clsx'
import { getFlashMessages } from '#resources/helpers/flash_messages'

interface Select2Props {
  options: { value: string; label: string }[]
}

export function Select2(Props: Select2Props) {
  const flashMessages = getFlashMessages()
  const oldCohortId = flashMessages.get('cohort_id') || ''
  const oldCohort = Props.options.find((option) => option.value === oldCohortId)
  const { options } = Props
  return (
    <div class="select2">
      <div class="select2-container">
        <span
          aria-live="polite"
          aria-atomic="false"
          aria-relevant="additions text"
          class="select2-a11yText"
        ></span>
        <div
          class={clsx(
            'select2-control',
            flashMessages.has('inputErrorsBag.cohort_id') ? 'is-error' : ''
          )}
        >
          <div class="select2-selector">
            <div class="select2-singleValue">{oldCohort?.label}</div>
          </div>
          <div class="">
            <span class="indicatorSeparator"></span>
            <div class="indicatorContainer" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <input name="cohort_id" type="hidden" value={oldCohort?.value} />
      </div>
      <div class="select2-dropdown">
        <div class="select2-dropdown-menu">
          <div class="select2-options">
            {options.map((option) => (
              <div class="crumble-tooltip-container">
                <div class="select2-option" tabindex="-1" data-value={option.value}>
                  {option.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
