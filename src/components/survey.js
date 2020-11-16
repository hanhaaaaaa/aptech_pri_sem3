import React from "react";
import "../assets/styles/survey.scss";
import HeroImages from "../assets/images/HeroImage.png";
import LeafIllustration from "../assets/images/LeafIllustration.png";
import SurveyImg from "../assets/images/SurveyImg.png";
import { Pagination } from "antd";

function Survey() {
  return (
    <>
      <div className="header">
        <img src={HeroImages} alt="hri" />
        <h1>Surveys</h1>
      </div>
      <div className="main">
        <h1>Newest</h1>
        <img src={LeafIllustration} alt="LI" />
      </div>
      <div className="contentPage">
        <div className="box">
          <div className="img">
            <img src={SurveyImg} alt="svImg" />
          </div>
          <div className="contentBox">
            <h1>The green road</h1>
            <p className="p1">Location: Florida</p>
            <div className="date">
              <div className="startDate">Start Date: 18/06/2020 </div>
              <div className="expired">Expired after 3 days</div>
            </div>
            <p className="p2">
              In this survey, we will go through some questions about the
              [location] which took place at Florida, USA. Therefore, students
              are likely to understand the risks that this place is facing.
            </p>
            <p className="p3">Participants: 186</p>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={SurveyImg} alt="svImg" />
          </div>
          <div className="contentBox">
            <h1>The green road</h1>
            <p className="p1">Location: Florida</p>
            <div className="date">
              <div className="startDate">Start Date: 18/06/2020 </div>
              <div className="expired">Expired after 3 days</div>
            </div>
            <p className="p2">
              In this survey, we will go through some questions about the
              [location] which took place at Florida, USA. Therefore, students
              are likely to understand the risks that this place is facing.
            </p>
            <p className="p3">Participants: 186</p>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={SurveyImg} alt="svImg" />
          </div>
          <div className="contentBox">
            <h1>The green road</h1>
            <p className="p1">Location: Florida</p>
            <div className="date">
              <div className="startDate">Start Date: 18/06/2020 </div>
              <div className="expired">Expired after 3 days</div>
            </div>
            <p className="p2">
              In this survey, we will go through some questions about the
              [location] which took place at Florida, USA. Therefore, students
              are likely to understand the risks that this place is facing.
            </p>
            <p className="p3">Participants: 186</p>
          </div>
        </div>
        <div className="pagination">
          <Pagination defaultCurrent={3} total={100} showSizeChanger={false} />
        </div>
        <div className="leaderBoardSection">
          
        </div>
      </div>
    </>
  );
}
export default Survey;
