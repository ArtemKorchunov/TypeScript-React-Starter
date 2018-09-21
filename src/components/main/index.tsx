import * as React from "react";
import "./styles.css";

import { Props } from "../../containers/main";

function Component({ count, addCount }: Props) {
    return (
        <div className="hello">
            <div className="greeting">Hello      {count}</div>
            <div>




                <button onClick={() => addCount(count +


                    1)
                }>+</button>
            </div>
        </div>
    );
}

export default Component;
