import React from 'react'
import { Link } from 'react-router-dom'
import KendoForm from '../customized/KendoForm'

export default function ContactUs() {
  return (
    <div className="container">
      <Link
        to='/sale'
      >
        <span className="float-left">
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            class="bi bi-arrow-left myPath"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="MyGradient">
                <stop offset="5%" stop-color="#ffa760" />
                <stop offset="95%" stop-color="#ff5d83" />
              </linearGradient>
            </defs>

            <path
              fill-rule="evenodd"
              d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
            />
            <path
              fill-rule="evenodd"
              d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>
      </Link>
      <KendoForm />
      <br /><br /><br />
    </div>
  )
}
