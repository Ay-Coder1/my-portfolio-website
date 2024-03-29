import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

function Service() {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur elict.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur elict.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur.</p>
            </li>
           
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service_head">
            <h3>App Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur .</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur elict.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>lorem, ipsum dolor amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/* END OF App Development */}
      </div>
    </section>
  );
}

export default Service