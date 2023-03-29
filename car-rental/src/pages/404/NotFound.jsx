import React from 'react'
import './error.css'

export default function NotFound() {
  return (
      <div className="error-page">
          <div className="container ">

              <section className="error-wrapper text-center">
                  <h1><img alt="" src="car-rental/public/static/404-error.png"/></h1>
                  <h2>page not found</h2>
                  <h3>We Couldn’t Find This Page</h3>
                  <a className="back-btn" href="home"> Back To Home</a>
              </section>

          </div>
      </div>
  )
}
