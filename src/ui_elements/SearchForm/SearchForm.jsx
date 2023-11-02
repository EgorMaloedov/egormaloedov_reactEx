import './SearchForm.css'

function SearchForm(props){
    return (
        <form className='searchForm'>
        <input onChange={props.onChangeInput} type="text" placeholder={props.placeholder}/>
        <button type="submit">{props.btnImage}</button>
        </form>
    )
}

export default SearchForm