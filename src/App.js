import logo from './logo.svg';
import './App.css';

function App() {
  return (

<>
    <div class="outline">
      <div class="lecard">
        <h2>Some Nerd</h2>
        <img src="https://i.kym-cdn.com/news_feeds/icons/mobile/000/037/359/05b.jpg" alt="Obi-Wan headshot" />
        <p class="details">Hello there <br></br> Lightsaber go <i>brrrr</i></p>
      </div>
    </div>
  <div class="buttons">
  
  <button class="copyCat">Copy</button>
  <button id="del">Delete</button>
  <button class="btnDet">Toggle Details</button> 
  <button class="btnCT">Change Title</button>
  <button  class="btnBG">Change Background Color</button>
  

  <button id="duplicate" class="outsideBtn">Duplicate</button>
<button id="bg" class="outsideBtn">Background</button>
<button id="header" class="outsideBtn">Heading</button>
<button id="delete" class="outsideBtn">Delete</button>

<div class="card">
  <h1 class="title">Chad of Cyber IST</h1>

  <img class="giaImg" src="https://media.discordapp.net/attachments/963095262363017246/1020131830323744788/unknown.png?width=468&height=468" alt="Professor Giacobe"/>
  
<div class="textbox">
  <details>
    <summary class="haxbtn">Details</summary>
    <p class="description pScale">Professor Giacobe may look like a simple man but perceptions can be misleading. Underneath the facade of a simple college of IST professor lies the holiness of an <strong>IST GOD</strong>!</p>
  </details>

  </div>
</div>

  </div>
  
</>
  );
}

export default App;
