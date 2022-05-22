import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact 
      name="Amy Hunt"
      avatar="https://randomuser.me/api/portraits/women/39.jpg"
      online={true}
      />
      <Contact 
      name="Christopher Young"
      avatar="https://randomuser.me/api/portraits/men/90.jpg"
      online={false}
      />
      <Contact 
      name="Terra Matthews"
      avatar="https://randomuser.me/api/portraits/women/64.jpg"
      online={true}
      />
    </div>
  );
}

export default App;
