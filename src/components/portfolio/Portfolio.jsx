import React from 'react'
import './portfolio.css'
import IMG1 from '../../asesst/desktop.png'
import IMG2 from '../../asesst/free-news-website-template.jpg'
import IMG3 from '../../asesst/mobile.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Ecommerce Website ",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/21626676-Ecommerce-Website",
  },
  {
    id: 1,
    image: IMG2,
    title: "Blog Website ",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/21626676-Ecommerce-Website",
  },
  {
    id: 1,
    image: IMG3,
    title: "Ecommerce Website ",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/21626676-Ecommerce-Website",
  },
  {
    id: 1,
    image: IMG1,
    title: "Ecommerce Website ",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/21626676-Ecommerce-Website",
  },
  {
    id: 1,
    image: IMG2,
    title: "Blog Website",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/21626676-Ecommerce-Website",
  },
  {
    id: 1,
    image: IMG3,
    title: "Ecommerce Website ",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/21626676-Ecommerce-Website",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github,demo }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn">
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })
       }
      </div>
    </section>
  );
}

export default Portfolio