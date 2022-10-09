import Row from "./components/Row";
import categories from "./api";
import "./App.css";

function App(){

  return (

<div className="App">

{categories.map((category) => {
 return <Row 
 key={category.name} 
 title={category.title} 
 path={category.path}
 isLarge={category.isLarge}
 />
})
}
</div>
  );
}

export default App;