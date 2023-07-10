import {useState} from 'react'
interface Props {
    keyword: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export default function SearchBar({ keyword, handleChange, handleSubmit }: Props){

    const [showErrorMsg, setShowErrorMsg] = useState(false)

    const handleSubmitInput = (event: React.FormEvent<HTMLFormElement>) => {
        handleSubmit(event)
        if(keyword === ''){
            setShowErrorMsg(true)
        } else {
            setShowErrorMsg(false)
        }
    }

    return (
        <div className="search">
            <form onSubmit={handleSubmitInput}>
                <label htmlFor="inputSearch">
                    <input 
                        className={`${showErrorMsg && 'search__input-error'}`}
                        id="inputSearch"
                        type="text" 
                        onChange={handleChange}
                        value={keyword}
                        placeholder="Write here..." />
                </label>
                <button data-testid='submit-btn' name='search-btn'>
                    <img 
                        src="https://res.cloudinary.com/dp3chx1yj/image/upload/v1688331217/dictonary-api/icon-search_jgvnfe.svg" alt="search-icon"
                        width={18}
                        height={18} />
                </button>
                {
                    showErrorMsg &&
                    <span className="search__input-message">Whoops, can’t be empty…</span>
                }
            </form>
        </div>
    )
}