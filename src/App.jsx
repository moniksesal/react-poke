import {useState, useEffect} from 'react'
import './App.css';
import SearchForm from './components/SearchForm'
import PokemonCard from './components/PokemonCard'
import ErrorMessage from './components/ErrorMessage'
import Loading from './components/Loading'

function App () {
  const [searchTerm, setSearchTerm] = useState('')
  const [pokemon, setPokemon] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    if (searchTerm === '') return

    const fetchPokemon = async () => {
      try {
        setLoading(true) // empieza a cargar
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLocaleLowerCase()}`)

        if (!response.ok) {
          throw new Error('Pokemon no encontrado')
        }

        const data = await response.json()
        setPokemon(data)
        setError(null) //limpiar error si todo va bien
      } catch (error) {
        console.error(error)
        setPokemon(null) //no hay pokemon
        setError(error.message) //guardar msj  de error
      } finally {
        setLoading(false) //deja de cargar - finally: se ejecuta siempre, haya error o no
      }
    }
    fetchPokemon()

  }, [searchTerm])

  return (
    <>
      <h1>Buscador de Pokemon</h1>
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ErrorMessage message={error} />
      <Loading loading={loading} />
      <PokemonCard pokemon={pokemon} />
    </>
  )
};

export default App;
