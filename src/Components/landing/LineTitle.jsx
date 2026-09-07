import React from "react";

export default function LineTitle({ lines, accentLine = -1, accentElement = "span" }) {
  const Accent = accentElement;
  return lines.map((line, index) => (
    <React.Fragment key={`${line}-${index}`}>
      {index === accentLine ? <Accent>{line}</Accent> : line}
      {index < lines.length - 1 && <br />}
    </React.Fragment>
  ));
}
