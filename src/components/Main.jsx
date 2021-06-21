import { useState } from "react";

import AnswersList from "./AnswersList";

export default function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([])
  const [newAnswer, setNewAnswer] = useState({})

  const handleSubmit = (e)=>{
    e.preventDefault()
    setAnswers([...answers, newAnswer])
  }

  const handleChange = (e)=>{
    const {name, checked, value} = e.target
    if ((name==="bestFeatures"||name==="worstFeatures"||name==="timeSpent")&&newAnswer[name]) {
      checked ? 
      setNewAnswer({
        ...newAnswer,
        [name] : [...newAnswer[name], value]
      }) :
      setNewAnswer({
        ...newAnswer,
        [name] : newAnswer[name].filter(arrayValue=>arrayValue!==value)
      })
    }else if (name==="bestFeatures"||name==="worstFeatures"||name==="timeSpent") {
      checked ?
      setNewAnswer({
        ...newAnswer,
        [name] : [value]
      }) : null
    }else{
      setNewAnswer({
        ...newAnswer,
        [name] : value
      })
    }

  }


  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} />
      </section>
      <section className="main__form">
        <form onSubmit={handleSubmit} onChange={handleChange} className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
            <h3>What would you say that are the best features of your rubber duck?</h3>
            <ul>
              <li>
                <label
                  ><input name="bestFeatures" type="checkbox" value="colour" checked={newAnswer.bestFeatures ? newAnswer.bestFeatures.includes("colour") : false}/>It's
                  yellow!</label
                >
              </li>
              <li>
                <label
                  ><input name="bestFeatures" type="checkbox" value="sound" checked={newAnswer.bestFeatures ? newAnswer.bestFeatures.includes("sound") : false}/>It
                  squeaks!</label
                >
              </li>
              <li>
                <label
                  ><input name="bestFeatures" type="checkbox" value="logo" checked={newAnswer.bestFeatures ? newAnswer.bestFeatures.includes("logo") : false}/>It has a
                  logo!</label
                >
              </li>
              <li>
                <label
                  ><input name="bestFeatures" type="checkbox" value="size" checked={newAnswer.bestFeatures ? newAnswer.bestFeatures.includes("size") : false}/>Its big!</label
                >
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>What would you say that are the worst bits of your rubber duck?</h3>
            <ul>
              <li>
                <label
                  ><input name="worstFeatures" type="checkbox" value="colour" checked={newAnswer.worstFeatures ? newAnswer.worstFeatures.includes("colour") : false}/>It's
                  yellow!</label
                >
              </li>
              <li>
                <label
                  ><input name="worstFeatures" type="checkbox" value="sound" checked={newAnswer.worstFeatures ? newAnswer.worstFeatures.includes("sound") : false}/>It
                  squeaks!</label
                >
              </li>
              <li>
                <label
                  ><input name="worstFeatures" type="checkbox" value="logo" checked={newAnswer.worstFeatures ? newAnswer.worstFeatures.includes("logo") : false}/>It has a
                  logo!</label
                >
              </li>
              <li>
                <label
                  ><input name="worstFeatures" type="checkbox" value="size" checked={newAnswer.worstFeatures ? newAnswer.worstFeatures.includes("size") : false}/>Its big!</label
                >
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input id="consistency1" type="radio" name="consistency" value="1" checked={newAnswer.consistency ? newAnswer.consistency==="1" : false}/><label
                  htmlFor="consistency1"
                  >1</label
                >
              </li>
              <li>
                <input id="consistency2" type="radio" name="consistency" value="2" checked={newAnswer.consistency ? newAnswer.consistency==="2" : false}/><label
                  htmlFor="consistency2"
                  >2</label
                >
              </li>
              <li>
                <input id="consistency3" type="radio" name="consistency" value="3" checked={newAnswer.consistency ? newAnswer.consistency==="3" : false}/><label
                  htmlFor="consistency3"
                  >3</label
                >
              </li>
              <li>
                <input id="consistency4" type="radio" name="consistency" value="4" checked={newAnswer.consistency ? newAnswer.consistency==="4" : false}/><label
                  htmlFor="consistency4"
                  >4</label
                >
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="colour1" type="radio" name="colour" value="1" checked={newAnswer.colour ? newAnswer.colour==="1" : false}/><label
                  htmlFor="colour1"
                  >1</label
                >
              </li>
              <li>
                <input id="colour2" type="radio" name="colour" value="2" checked={newAnswer.colour ? newAnswer.colour==="2" : false}/><label
                  htmlFor="colour2"
                  >2</label
                >
              </li>
              <li>
                <input id="colour3" type="radio" name="colour" value="3" checked={newAnswer.colour ? newAnswer.colour==="3" : false}/><label
                  htmlFor="colour3"
                  >3</label
                >
              </li>
              <li>
                <input id="colour4" type="radio" name="colour" value="4" checked={newAnswer.colour ? newAnswer.colour==="4" : false}/><label
                  htmlFor="colour4"
                  >4</label
                >
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input id="logo1" type="radio" name="logo" value="1" checked={newAnswer.logo ? newAnswer.logo==="1" : false}/><label
                  htmlFor="logo1"
                  >1</label
                >
              </li>
              <li>
                <input id="logo2" type="radio" name="logo" value="2" checked={newAnswer.logo ? newAnswer.logo==="2" : false}/><label
                  htmlFor="logo2"
                  >2</label
                >
              </li>
              <li>
                <input id="logo3" type="radio" name="logo" value="3" checked={newAnswer.logo ? newAnswer.logo==="3" : false}/><label
                  htmlFor="logo3"
                  >3</label
                >
              </li>
              <li>
                <input id="logo4" type="radio" name="logo" value="4" checked={newAnswer.logo ? newAnswer.logo==="4" : false}/><label
                  htmlFor="logo4"
                  >4</label
                >
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label
                  ><input name="timeSpent" type="checkbox" value="swimming" checked={newAnswer.timeSpent ? newAnswer.timeSpent.includes("swimming") : false}/>Swimming</label
                >
              </li>
              <li>
                <label
                  ><input name="timeSpent" type="checkbox" value="bathing"  checked={newAnswer.timeSpent ? newAnswer.timeSpent.includes("bathing") : false}/>Bathing</label
                >
              </li>
              <li>
                <label
                  ><input name="timeSpent" type="checkbox" value="chatting" checked={newAnswer.timeSpent ? newAnswer.timeSpent.includes("chatting") : false}/>Chatting</label
                >
              </li>
              <li>
                <label
                  ><input name="timeSpent" type="checkbox" value="noTime" checked={newAnswer.timeSpent ? newAnswer.timeSpent.includes("noTime") : false}/>I don't like to spend time with it</label
                >
              </li>
            </ul>
          </div>
          <label
            >What else have you got to say about your rubber duck?<textarea
              name="review"
              cols="30"
              rows="10"
              value={newAnswer.review ? newAnswer.review : ""}
            ></textarea></label
          ><label
            >Put your name here (if you feel like it):<input
              type="text"
              name="username"
              value={newAnswer.username ? newAnswer.username : ""}/></label
          ><label
            >Leave us your email pretty please??<input
              type="email"
              name="email"
              value={newAnswer.email ? newAnswer.email : ""}/></label
          ><button className="form__submit" type="submit">Submit Survey!</button>
        </form>
      </section>
    </main>
  );
}
