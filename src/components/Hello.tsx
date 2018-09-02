import * as React from 'react';
import './Hello.css';

export interface Props {
  count: number,
  addIncrement: (arg: number) => void,
}

function Hello({ count, addIncrement }: Props) {


  return (
    <div className="hello">
      <div className="greeting">
        Hello {count}
      </div>
      <div>
        <button onClick={() => addIncrement(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default Hello;
