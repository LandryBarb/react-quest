export interface GameTileProps {
    ID: string;
    title: string;
    imageUrl: string;
    lastPlayed: string;
    isPlaying?: boolean
}

export function GameTile({ ID, title, imageUrl, lastPlayed, isPlaying }: GameTileProps) {
    return(
        <article className="card u-flow" aria-labelledby={`${ID}-heading`}>
            <img src={imageUrl} alt={isPlaying ? `${title} - Currently Playing` : `${title} game cover art`} />
            <h3 id={`${ID}-heading`} className="card__header">{title}</h3>
            {isPlaying && <span className="badge">Now Playing</span>}
            <p className="card__body">Last played: {lastPlayed}</p>
        </article>
    )
}