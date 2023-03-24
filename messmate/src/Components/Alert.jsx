import React from 'react'

function Alert({alert}) {
    console.log(alert);
  return (
<div
  className={` hidden w-full items-center bg-${alert.type} p-3 max-w-[100%] rounded-lg bg-warning-100 mt-2 mb-4 text-base text-warning-800 data-[te-alert-show]:inline-flex`}
  role="alert"
  data-te-alert-init
  data-te-alert-show>
  {alert.message}
  <button
    type="button"
    className="ml-auto box-content  rounded-none border-none p-1 text-warning-900 opacity-50 hover:text-warning-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
    data-te-alert-dismiss
    aria-label="Close">
    <span
      className="w-[1em]  focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"

        fill="currentColor"
        className="h-6 w-6 relative top-0">
        <path
          fill-rule="evenodd"
          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </button>
</div>
  )
}

export default Alert