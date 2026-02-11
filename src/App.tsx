import { GameTile } from "./components/GameTile";

const games = [


  {
    ID: "elden-ring",
    title: "Elden Ring",
    imageUrl: "./images/elden-ring.jpg",
    lastPlayed: "2 days ago",
    isPlaying: true
  },
  {
    ID: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    imageUrl: "./images/baldurs-gate-3.webp",
    lastPlayed: "1 week ago",
    isPlaying: false
  },
  {
    ID: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    imageUrl: "./images/cyberpunk-2077.jpg",
    lastPlayed: "3 days ago",
    isPlaying: false
  },
  {
    ID: "witcher-3",
    title: "The Witcher 3",
    imageUrl: "./images/witcher-3.jpg",
    lastPlayed: "Today",
    isPlaying: true
  },
  {
    ID: "red-dead-2",
    title: "Red Dead Redemption 2",
    imageUrl: "./images/red-dead-2.avif",
    lastPlayed: "5 days ago",
    isPlaying: false
  },
  {
    ID: "god-of-war",
    title: "God of War Ragnarök",
    imageUrl: "./images/god-of-war.webp",
    lastPlayed: "Yesterday",
    isPlaying: false
  },
  {
    ID: "starfield",
    title: "Starfield",
    imageUrl: "./images/starfield.jpg",
    lastPlayed: "2 weeks ago",
    isPlaying: false
  },
  {
    ID: "forza-horizon-5",
    title: "Forza Horizon 5",
    imageUrl: "./images/forza-horizon-5.webp",
    lastPlayed: "4 days ago",
    isPlaying: false
  }
]


function App(){
  return(
    <div className="app">
      <main id="main" className="main-content">

        <section className="continue-playing">
          <div className="container">
            <h2 className="section__header">Continue Playing</h2>
            <div className="u-grid">
              {games.filter(game => game.isPlaying).map(game => (
                <GameTile
                  ID={game.ID}
                  key={game.ID}
                  title={game.title}
                  imageUrl={game.imageUrl}
                  lastPlayed={game.lastPlayed}
                  isPlaying={game.isPlaying}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="section">
      
        <div className="container-fluid">
          <h1 className="page_header">My Game Library</h1>
          <div className="u-grid-wrap">
              <h2 className="section__header">Recently Played</h2>
            <div className="u-grid">
                {games.map((game) => (
            <GameTile
           ID={game.ID}
            key = {game.ID}
            title = {game.title}
            imageUrl = {game.imageUrl}
            lastPlayed = {game.lastPlayed}
            isPlaying = {game.isPlaying} />
          ))}
            </div>
           
          </div>
         
        </div>
      </section>
      </main>
      
   
    </div>
  );
}

export default App;