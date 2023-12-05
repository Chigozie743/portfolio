import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/gate.png";
import IMG2 from "../../assets/gateman.png";
import IMG3 from "../../assets/abc.svg";
import IMG4 from "../../assets/nurquest.png";
import IMG5 from "../../assets/lightNG.png";
import IMG6 from "../../assets/loadng.png";
import IMG7 from "../../assets/weather.png";
import IMG8 from "../../assets/note.png";
import IMG9 from "../../assets/photo.png";
import IMG10 from "../../assets/ecommerce.png";
import IMG11 from "../../assets/food.png";
import IMG12 from "../../assets/game.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title:
      "Gate Africa empowers users to effortlessly create and send guest invitations to their estates. Avaliable on play store and app store",
    github: "",
    demo: "https://play.google.com/store/apps/details?id=co.savertech.gateAfrica",
    //     demo: ""
  },
  {
    id: 2,
    image: IMG2,
    title:
      "Gate Africa Admin is an app designed for estate security personnel.",
    github: "",
    demo: "https://play.google.com/store/apps/details?id=com.savertech.gateafrica_admin",
    // demo: "https://mphundss.herokuapp.com/"
  },
  {
    id: 3,
    image: IMG3,
    title:
      "Cardify - A fintech platform that has three major system wallet, Exchange and Bills, worked mainly on the bills system . \n App available on both IOS and Android",
    github: "",
    demo: "https://app.cardify.co/",
    // demo: "https://vid-chatting.herokuapp.com/"
  },
  {
    id: 4,
    image: IMG4,
    title:
      "Nurquest - An Islamic compass. A journey of enlightenment available on play store",
    github: "",
    demo: "https://play.google.com/store/apps/details?id=rightislam.com.ng",
  },
  {
    id: 5,
    image: IMG5,
    title:
      "LightNG - A fintech system that helps user purchase their electricity bill and manages payment for electricity",
    github: "",
    demo: "https://light.ng/",
  },
  {
    id: 6,
    image: IMG6,
    title:
      "LoadNG - provides an automated way to Sell Paxful Bitcoin for Cash In Nigeria Instantly. Available on play store and app store",
    github: "",
    demo: "https://loadng-sell-bitcoin-in-nigeri.en.softonic.com/android",
  },
  {
    id: 7,
    image: IMG7,
    title: "A weather forecasting app for any part of the world.",
    github: "https://github.com/Chigozie743/weather_forecasting_app.git",
    demo: "",
  },
  {
    id: 8,
    image: IMG8,
    title: "A To-do list app.",
    github: "https://github.com/Chigozie743/To-Do_List.git",
    demo: "",
  },
  {
    id: 9,
    image: IMG9,
    title: "A Photo sharing app",
    github: "https://github.com/Chigozie743/Photo_Clone_App.git",
    demo: "",
  },
  {
    id: 10,
    image: IMG10,
    title: "An E-commerce for online shopping",
    github: "https://github.com/Chigozie743/Store_App.git",
    demo: "",
  },
  {
    id: 11,
    image: IMG11,
    title: "Omnifood - The smart 365-days-per-year food subscription web",
    github: "https://github.com/Chigozie743/Omnifood1.git",
    demo: "https://omnifood-ai-final.netlify.app/",
  },
  {
    id: 12,
    image: IMG12,
    title:
      "TicTacToe - A simple naught and cross game with flutter that can involve two playes or just a player",
    github: "https://github.com/Chigozie743/tic-tac-toe.git",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="image1" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                {github === "" ? (
                  <button className="btn" target="_blank" rel="noreferrer">
                    Private Repo
                  </button>
                ) : (
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                )}

                {demo.toLowerCase() === "" ? (
                  <button className="btn btn-primary">Not yet Deployed</button>
                ) : (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
