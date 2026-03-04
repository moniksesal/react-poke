import styles from './PokemonCard.module.css'


export default function PokemonCard({pokemon}) {
    return (
        <>
        {pokemon && (
          <div className={styles.pokemonCard}>
            <h2>{pokemon.name.toUpperCase()}</h2>
            <img 
              src={pokemon.sprites.front_default} 
              alt={pokemon.name} />
          </div>
        )}
        </>
    )}
