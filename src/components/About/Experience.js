import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "./Experience.css";

function Experience() {
  const [key, setKey] = useState("ali");

  return (
    <Container fluid className="experience-section">
      <Container>
        <Row>
          <Col md={12} className="experience-content">
            <h1 className="project-heading">
              <strong className="purple">Experiences</strong> I had
            </h1>
            <Tab.Container
              id="experience-tabs"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Nav variant="pills" className="experience-tabs mb-5">
                <Nav.Item>
                  <Nav.Link eventKey="ali">阿里国际</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="wechat">微信搜索</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="microsoft">微软亚研院</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="turingworld">图灵世界</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="ali">
                  <div className="exp-content">
                    <h3 className="exp-title">
                      广告 AIGC 和广告机制策略产品实习生{" "}
                      <span className="purple">@ 阿里国际</span>
                    </h3>
                    <p className="exp-duration">2024年5月 - 2024年9月</p>
                    <p className="exp-desc">
                      负责AIGC创意优化的产品设计和部分广告流量、商家策略工作。
                    </p>
                    <ul className="exp-list">
                      <li>设计全自动的商品主图再制作及优选机制，将其嵌入搜索推荐广告投放流程，提升 CTR 2.31%</li>
                      <li>通过体验 case 分析、提出假设、数据验证等方式，引导研发完善价格特征建设</li>
                      <li>通过 case 分析、数据分析和算法讨论，优化智能投放计划中的最高出价最小值，预期带来 1% 广告收入增长</li>
                    </ul>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="wechat">
                  <div className="exp-content">
                    <h3 className="exp-title">
                      产品策划实习生 <span className="purple">@ 微信搜索</span>
                    </h3>
                    <p className="exp-duration">2023年11月 - 2024年3月</p>
                    <p className="exp-desc">
                      负责微信搜索结果中图片类和问答类内容的用户满足度优化。
                    </p>
                    <ul className="exp-list">
                      <li>实施图片类搜索的结果页样式优化，新样式显著提升 8.8% 用户深度行为率，1.1% 用户主动同义搜索率</li>
                      <li>引入用户深度行为指标（下载、收藏、分享）优化排序，提升 2.8% 用户深度行为率，4.2% 人均图片下载量</li>
                      <li>通过竞品调研、case 拆解、理想态定义等，优化结果页摘要语义飘红，提升用户消费时长</li>
                      <li>协助算法进行大模型微调以提升其总结能力，探索首条满足的可能性</li>
                    </ul>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="microsoft">
                  <div className="exp-content">
                    <h3 className="exp-title">
                      AI PM 实习生 <span className="purple">@ 微软亚洲研究院</span>
                    </h3>
                    <p className="exp-duration">2023年4月 - 2023年10月</p>
                    <p className="exp-desc">
                      负责 AI Agent 相关科研成果的产品化，并探索 AIGC 在图像和视频方向的应用。
                    </p>
                    <ul className="exp-list">
                      <li>实施 AI Agent 技术的从 0 到 1 产品化实践，通过用户场景挖掘、产品功能设计、内外部沟通等，推动产品在三个月内上线并获得 300+ 起始用户。项目获得 2023 Microsoft Hackathon Outstanding Award（6/119）</li>
                      <li>负责 AIGC - image & video 方向产品调研和 Text-to-Video 模型 demo 设计，组织进行两次大规模行业趋势分享并推动 demo 按时上线</li>
                    </ul>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="turingworld">
                  <div className="exp-content">
                    <h3 className="exp-title">
                      创业项目 <span className="purple">@ 图灵世界</span>
                    </h3>
                    <p className="exp-duration">2022年9月 - 2023年3月</p>
                    <p className="exp-desc">
                      基于 Stable Diffusion 的家装市场 AIGC 项目，致力于为建筑师和家装设计师提供 AI 辅助设计。
                    </p>
                    <ul className="exp-list">
                      <li>参与用户调研、市场调研和产品原型设计</li>
                      <li>获得 2022 清华大学 SDG 开放创新马拉松挑战赛最具国际潜力奖</li>
                    </ul>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;