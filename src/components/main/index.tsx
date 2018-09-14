import * as React from "react";
import "./styles.css";

export interface Props {
  count: number;
  addCount: (arg: number) => void;
}

function Hello({ count, addCount }: Props) {
  return (
    <div className="hello">
      <div className="greeting">Hello {count}</div>
      <div>
        <button onClick={() => addCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default Hello;
