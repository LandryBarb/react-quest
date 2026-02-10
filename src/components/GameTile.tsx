export interface GameTileProps {
    title: string;
    imageUrl: string;
    lastPlayed: string;
    isPlaying?: boolean
}

export function GameTile({ title, imageUrl, lastPlayed, isPlaying }: GameTileProps) {
    return(
        <article className="card" aria-labelledby="card-heading">
            <img src={imageUrl} alt={title} />
            <h3 id="card-heading" className="card__header">{title}</h3>
            {isPlaying && <span>Now Playing</span>}
            <p className="card__body">Last played: {lastPlayed}</p>
        </article>
    )
}