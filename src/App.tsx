import { Experiment, Variant } from "react-optimize";

import { ColorWelcome } from "./pages/ColorWelcome";
import { DarkWelcome } from "./pages/DarkWelcome";
import { LightWelcome } from "./pages/LightWelcome";

export function App() {
  return (
    <Experiment id="MfQ28UcSSECfilEQKWQXeQ">
      <Variant id="0">
        <DarkWelcome />
      </Variant>
      <Variant id="1">
        <LightWelcome />
      </Variant>
      <Variant id="2">
        <ColorWelcome />
      </Variant>
    </Experiment>
  );
}
