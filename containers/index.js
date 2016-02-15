import React from "react";
import {render} from "react-dom";
import Fibonacci from "../components/fibonacci";

render(<Fibonacci length={10} />, document.getElementById("app"));
