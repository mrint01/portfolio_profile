import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";

export default function GithubProfileCard({prof}) {
  if (prof.isHireable) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>
           <h5>{emoji("📧 sfarhatem7@yahoo.com")}</h5>
            <h5>{emoji("📱 +216 50 427 046")}</h5>
            
             
         
            <div className="opp-div">
              <span className="desc-prof">
                Open for opportunities: Yes
              </span>
            </div>
            <SocialMedia />
          </div>
          <div  className="image-content-profile">
            <img
              src={require("../../assets/images/img_profile.jpg")}
              alt={prof.name}
              style={{maxHeight: "350px"}}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
