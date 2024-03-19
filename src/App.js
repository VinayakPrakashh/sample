
function App() {

let count = 0;
const addcount = ()=>{
  count=count+1
  console.log(count)
}
  return (
<div>
  <h1>
    COUNT: {count}
  </h1>
  <button onClick={addcount}>CLICK ME</button>
</div>
  );
}

export default App;


