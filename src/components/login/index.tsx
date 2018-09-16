import * as React from "react";
import "./styles.css";

import { Props } from "../../containers/login";
//Stateless
import Form from "./form";

function Component({  }: Props) {
  return (
    <div>
      <Form />
    </div>
  );
}

export default Component;
