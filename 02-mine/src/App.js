import { render } from "react-dom";

import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adapt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
