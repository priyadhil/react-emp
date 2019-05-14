import React from "react";
import "./App.css";
//import "./images";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    { img: 1, name: "bob", job: "designer" },
    { img: 2, name: "dhil", job: "developer" },
    { img: 3, name: "rav", job: "manager" }
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Person>
      <Person person={people[2]} />
    </section>
  );
};

const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `images/'${img}'.jpg`;
  // const url = "https://randomuser.me/api/portraits/thumb/men/22.jpg";
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h2>{name}</h2>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
