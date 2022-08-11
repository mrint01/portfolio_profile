import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  console.log(dimensions)
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div  style={{marginTop: dimensions.width < 769 && "300px"}} className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <img
                alt="Man Working"
                src={require("../../assets/images/cod33.png")}
              ></img>
) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/cod33.png")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
