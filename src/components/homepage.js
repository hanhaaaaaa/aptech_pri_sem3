import React from "react";
import heroBackGround from "../assets/images/HeroBackground.png";
import TeamWorkIcon_1 from "../assets/images/TeamworkIcon_1.png";
import SurveyIcon from "../assets/images/SurveyIcon.png";
import PrizeIcon from "../assets/images/PrizeIcon.png";

function View() {
  return (
    <>
      <div className="headerHome">
        <img src={heroBackGround} alt="hrbgr" />
        <div className="text">
          <h1>Together, we Protect the </h1>
          <h1>Environment</h1>
          <button>Join Us</button>
        </div>
      </div>
      <div className="content_home">
        <div className="whatDoWeDo">
          <p className="p1">What Do We Do ?</p>
          <p className="p2">
            We encourage young generations to care more about the evironment by
            providing a lot of seminars sessions and online surveys about
            protecting our beloved Earth.
          </p>
        </div>
        <div className="icon">
          <div className="box">
            <img src={TeamWorkIcon_1} alt="twic" />
            <p>
              Provides seminars, lectures, etc. by guiding students to visit
              locations
            </p>
          </div>
          <div className="box">
            <img src={SurveyIcon} alt="twic" />
            <p>
              Encourages students to participate on surveys about the locations
              they had visited
            </p>
          </div>
          <div className="box">
            <img src={PrizeIcon} alt="twic" />
            <p>
              Grants interesting prizes to the top 3 students with the highest
              marks on the surveys
            </p>
          </div>
        </div>
        <div className="introSection2">
          <div className="box1"></div>
          <div className="box2">
            <div className="text">
              <p className="p1">why do these surveys exist?</p>
              <p className="p2">
                Beside encoraging students to be aware of the environment
                conditions on our globe these days, online surveys exist instead
                of traditional paper surveys. No more trees needed to produce
                paper. Everything is live on our website now, anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
        <h1 className="letDive">Let’s dive in!</h1>
      </div>
    </>
  );
}
export default View;
