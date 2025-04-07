import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import abtest from "../../Assets/Projects/abtest.png";
import resort from "../../Assets/Projects/resort.png";
import research from "../../Assets/Projects/research.png";
import record_today from "../../Assets/Projects/record_today.png";  
import novel from "../../Assets/Projects/novel.png";
import { FaYenSign } from "react-icons/fa";

function Projects() {
  // 创建项目数组，包含所有项目信息和日期
  const projects = [
    {
      imgPath: abtest,
      isBlog: true,
      title: "AB实验读书笔记",
      date: "2022-03-15",
      description: "源自《面向数据科学家的实用统计学》(practical statistics for data scientists)，其中一章介绍了AB实验，我做了一些笔记。",
      ghLink: "https://sponge-smile-b59.notion.site/AB-test-8a411b3e18d940b5bcf6ad8829b89acd"
    },
    {
      imgPath: resort,
      isBlog: true,
      title: "AI小游戏",
      date: "2025-03-12",
      description: "在Claude 3.7 Sonnet的帮助下，我写了一个放置类小游戏，可以通过不断点击获得资源购买设施，最终建成全球最好的度假村：）。",
      ghLink: "https://ni0317.github.io/tropical-paradise-resort/"
    },
    {
      imgPath: research,
      isBlog: true,
      title: "AIGC视频生成与编辑方向产品调研报告",
      date: "2023-09-30",
      description: "在MSRA实习期间，我完成了这一产品调研，扫描了当时市面上几乎所有有代表性的产品，结合一些科研论文，给出了自己对未来趋势的看法。",
      ghLink: "https://drive.google.com/file/d/1FdN7OgwdJgWONzOwIO7q_EiDaYeaDXRr/view"
    },
    {
      imgPath: record_today,
      isBlog: true,
      title: "《时间的乘法》小程序创作小记",
      date: "2025-04-07",
      description: "记录了做《时间的乘法》这个小程序的过程中，想法的诞生以及与AI的协作过程，这个小程序还在备案中，暂时搜不到",
      ghLink: "https://www.notion.so/1ce51de44c9f80d49d33c1e73ce7d84a?pvs=4"
    },
    {
      imgPath: novel,
      isBlog: true,
      title: "互动推理小说开发",
      date: "2023-03-20",
      description: "（已有小说，暂无互动）我一直很喜欢Disco Elysium和阿加莎的小说，所以想将二者结合，做一个互动推理小说，小说完全是由Claude写的，图片则通过comfyUI工作流生成。",
      ghLink: "https://www.notion.so/1bd51de44c9f800bb17de82805e34055?pvs=4"
    },
    /* 注释掉的项目也可以添加日期，但目前不显示
    {
      imgPath: bitsOfCode,
      isBlog: false,
      title: "Bits-0f-C0de",
      date: "2023-12-10",
      description: "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
      ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
      demoLink: "https://blogs.soumya-jit.tech/"
    },
    */
  ];

  // 按日期从新到旧排序项目
  const sortedProjects = [...projects].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          我 <strong className="purple">最近 </strong>在做什么...
        </h1>
        <p style={{ color: "white" }}>
          一些读书笔记和作品链接
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {sortedProjects.map((project, index) => (
            <Col md={6} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                date={project.date}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
