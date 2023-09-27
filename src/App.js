import Stunda from "./Stunda";
import Diena from "./Diena";

function App() {
  const trešdienasStundas = [
    "Datortīkli",
    "Datortīkli",
    "Sistēmu programmēšana",
    "Sistēmu programmēšana",
  ];
  const ceturtdienasStundas = [
    "Sistēmu programmēšana",
    "Matemātika",
    "Latviešu valoda",
    "Valodas kultūra",
  ];
  return (
    <>
      <h1>Hi mom</h1>
      <Diena nosaukums="Trešdiena" stundas={trešdienasStundas}/>
      <Diena nosaukums="Ceturtdiena" stundas={ceturtdienasStundas}/>
    </>
  );
}



export default App;