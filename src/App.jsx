// Instructions
// - Use this template => https://codesandbox.io/s/react-survey-form-starter-template-qgrgx
// - Make sure you check all the code that was given to you
// - Create the missing form, by following the templates in the templates folder, and by watching the gif
// - The values of the checkboxes and radio buttons are repeated throughout the different sections of the form
// - You are supposed to select more than one checkbox in any group
// - When the form is submitted, the answers should be stored in state
// - Also, after submitting the form, you should reset the form to its original state 
// - Display all the answers in the Answers List, using the provided components

import "./styles.css";

import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    // <> </> <- These are called React Fragments, and they allow us to return more than one top component
    <>
      <Header />
      <Main />
    </>
  );
}
