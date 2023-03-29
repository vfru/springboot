import React from 'react'
import './error.css'
import errPng from '../../assets/404-error.png'
export default function NotFound() {
  return (
              <section className="error-wrapper">
                  <h1><img alt="" src={errPng}/></h1>
                  <h2>page not found</h2>
                  <h3>We Couldn’t Find This Page</h3>
                  <a className="back-btn" href="home"> Back To Home</a>
              </section>
  )
}
