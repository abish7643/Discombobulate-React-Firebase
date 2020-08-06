import React from "react";
import "./rules.scss";
import ReactMarkdown from "react-markdown";
import rulesmarkdown from "./rulesmarkdown";

export default function Rules() {
  const markdown = rulesmarkdown;

  return (
    <div className="container">
      <h1>Rules</h1>
      <div className="rules__markdown">
        <ReactMarkdown source={markdown} />
      </div>
    </div>
  );
}
