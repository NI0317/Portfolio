import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             <span className="purple">申屠泥 </span>，互联网产品经理，毕业于 <span className="purple">清华大学</span>，
            目前居住在 <span className="purple"> 北京</span>。
            <br />
            <br />
            我专注于AI相关的产品设计，致力于打造既有价值又有趣的产品体验。
            <br />
            以下是我掌握的一些技能：
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 产品设计 with Figma & Modao
            </li>
            <li className="about-activity">
              <ImPointRight /> 数据分析 with SQL & Python
            </li>
            <li className="about-activity">
              <ImPointRight /> 用户调研\竞品分析\项目管理
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
