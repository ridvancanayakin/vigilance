import logo from './logo.svg';
import './App.css';

function App() {
  const colors = ["red", "blue", "yellow"]
  var colorIndex = 0;
  var shapeIndex = false;
  var rotateDir = true;

  var rotateAngle = 0;
  const render = () => {
    var wide = document.getElementById("wide");
    var narrow = document.getElementById("narrow");
    var rand= Math.random()*100;

    if(rand < 10) {
      console.log("color");
      colorIndex = (colorIndex + 1)%3;
      narrow.style.background = colors[colorIndex];
    } 
    else if (rand <20) {
      console.log("turn");
      rotateDir = !rotateDir;
    } else if(rand <30){
      console.log("shape");
      shapeIndex = !shapeIndex;
      narrow.style.borderRadius = shapeIndex ? "50%" : "0"; 
    } 
    if( rand < 40 && rand >30){
      console.log("jump");
      rotateAngle = rotateDir ? rotateAngle + 30 : rotateAngle -30;
      wide.style.rotate = rotateAngle + "deg"; 
    } 
    else {
      rotateAngle = rotateDir ? rotateAngle + 15 : rotateAngle -15;
      wide.style.rotate = rotateAngle + "deg"; 
    }
  };

  setInterval(render, 1500);

  return (
    <div className="page" style={{background: "black", width:"100%", height: "700px", display: 'flex', justifyContent: "space-between", flexDirection: "column"}}>
      <div className='top-buttons' style={{display: "flex", justifyContent: "space-between", height: "10%", width: "100%"}}> 
        <button onClick={(e)=>console.log("JUMP")} style={{height: "100%", width: "20%"}}>JUMP</button>
        <button onClick={(e)=>console.log("COLOR")} style={{height: "100%", width: "20%"}}>COLOR</button>
      </div>
      <div id="wide" style={{width:"100%", display: "flex", justifyContent: "center"}}>
        <div className="app" style={{width: "50%"}}>
          <div id="narrow" style={{width: "30px", height: "30px", background: "yellow"}}/>
        </div>  
      </div>
      <div className='bottom-buttons' style={{display: "flex", justifyContent: "space-between", height: "10%", width: "100%"}}> 
        <button onClick={(e)=>console.log("TURN")} style={{height: "100%", width: "20%"}}>TURN</button>
        <button onClick={(e)=>console.log("SHAPE")} style={{height: "100%", width: "20%"}}>SHAPE</button>
      </div>
    </div>
  );
}

export default App;
