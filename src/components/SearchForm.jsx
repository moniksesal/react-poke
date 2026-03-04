import styles from './SearchForm.module.css'

export default function SearchForm({searchTerm, setSearchTerm}) {
    return (
        <form className={styles.formContainer}>
        <label htmlFor="searchTerm">Nombre</label>
        <input 
          type="text" 
          id="searchTerm" 
          name="searchTerm" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.inputField}/>
      </form>
    )
}