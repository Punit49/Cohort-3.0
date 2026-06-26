import React from "react";
import About from "./About";
import Greetings from "./Greetings";
import Input from "./Input";
import Heading from "./Heading";
import UserCard from "./UserCard";
import Page from "./PropDrilling/Page";

function App(){

  // * Behind the scenes of JSX -
  // let div = React.createElement("div", {}, [ 
  //   React.createElement("h1", {}, "Hello"),
  //   React.createElement("h2", {}, "Bye"),
  //   React.createElement("h3", {}, "Vapas Aao") 
  // ])

  return (
    <div>
        {/* <h1>HEllo</h1>
        <About width="100px" element={<div>LOL</div>}>
          <h1>I am Children</h1>
          <h1>I am Children 2</h1>
        </About> */}

        {/* Multiple props */}
        {/* <Greetings name="Punit" age={21} isAdmin={true} hobbies={["coding", "Cricket"]} onDelete={() => console.log("Delete")}  />
        <Greetings name="Devendra Dhote" age={24} isAdmin={false} hobbies={["coding", "teaching"]} onDelete={() => console.log("Deleted")}  /> */}

        {/* Spread Props */}
        {/* <Input label="Email" type="text" placeholder="Email Daal isme" onChange={() => console.log( "Input Changed")} /> */}

        {/* Task - user cards */}
        {/* <Heading text="Our Development Team" />
          
        <UserCard name="Punit" role="Software Engineer" isAvailable={true} experience={2} skills={["React", "JS"]}>

          <ul>
            <li>LOL</li>
          </ul>

          <h1>90</h1>

        </UserCard>

        <UserCard name="Devendra Dhote" role="Software Engineer 1" isAvailable={true} experience={5} skills={["Teaching", "React", "JS"]} />

        <UserCard name="Sarthak Sharma" role="Software Engineer 2" isAvailable={false} experience={3} skills={["React", "JS", "API"]} /> */}

        {/* Prop drilling */}
        <Page user="Punit" />

    </div>
  )
}

export default App;