import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "即将毕业的学生",
          "一个热爱生活的人",
          "申屠泥的意义是流星、苍穹和\"我是不是在哪见过你?\"。"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
