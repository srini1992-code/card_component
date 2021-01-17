import React from "react";
import "./styles.css";
import Components from "./components";

export default function App() {
  return (
    <div className="app">
      <Components
        imageSrc={
          "https://images.unsplash.com/photo-1516004497017-fc037674c3aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        }
        name="Alex"
        date="5:00PM"
        content="Great Blog Post!!"
      />
      <Components
        imageSrc={
          "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
        name="Trupti"
        date="6:00PM"
        content="Informative Thanks!!"
      />
      <Components
        imageSrc={
          "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
        name="Jane"
        date="8:30PM"
        content="Looks Great!!"
      />
    </div>
  );
}
