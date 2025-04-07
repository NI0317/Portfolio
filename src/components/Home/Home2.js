import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              这是我的个人网页，我会在这里放一些读书笔记和个人作品<del>（如果有的话）</del>。
              <br />
              <br />
              我喜欢尝试编程，平时会使用
              <i>
                <b className="purple"> Javascript, Python & R </b>。
              </i>
              我正在学习    
              <i>
                <b className="purple"> AI Coding with Claude </b>。
              </i>
              <br />
              <br />
              我在学生时代做过很多数据新闻，曾经是
              <a href='https://www.thepaper.cn/user_3346780' className='link'>RUC新闻坊</a>
              的一员，有几十篇数据新闻作品。其中，我最喜欢的是
              <a href='https://mp.weixin.qq.com/s/Kjo45dy1uF_uwcQs5xDhXQ' className='link'>《痛苦有形，衰老无声：看见老年求助者》</a>。
              希望你也喜欢。
              <br />
              <br />
              未来，我将会成为一名 <b className="purple">互联网产品经理</b> 
              ，如果你对此感兴趣，欢迎移步<Link to='/about' className='link'>About</Link>。
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NI0317"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ni-shentu-268396241/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:stniii317@gmail.com;2018202035@ruc.edu.cn;stn22@mails.tsinghua.edu.cn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
