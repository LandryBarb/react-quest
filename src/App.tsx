import { GameTile } from "./components/GameTile";

function App(){
  return(
    <main className="app main">
      <section className="section">
        <h1 className="section__header">Recently Played</h1>
        <div className="container-fluid"></div>
      </section>
      <GameTile
      title="Elden Ring"
      imageUrl="./images/elden-ring.jpg"
      lastPlayed="2 days ago" />
    </main>
  );
}

export default App;