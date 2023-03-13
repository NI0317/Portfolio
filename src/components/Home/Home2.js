import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
              当然，我在（数据分析岗位的）实习和工作中主要还是在用
              <i>
                <b className="purple"> SQL </b>。
              </i>
              <br />
              <br />
              我一直在进行数据新闻方面的尝试，我是
              <a href='https://www.thepaper.cn/user_3346780' className='link'>RUC新闻坊</a>
              的一员，有几十篇数据新闻作品。其中，我最喜欢的是
              <a href='https://mp.weixin.qq.com/s/Kjo45dy1uF_uwcQs5xDhXQ' className='link'>《痛苦有形，衰老无声：看见老年求助者》</a>。
              希望你也喜欢。
              <br />
              <br />
              我不打算继续做学术，但如果你想探讨 <b className="purple">计算传播学（computational comm.）</b> 
              相关的话题，我也会很感兴趣。
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
