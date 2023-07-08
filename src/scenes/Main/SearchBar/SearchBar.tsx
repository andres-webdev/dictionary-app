interface Props {
    keyword: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export default function SearchBar({ keyword, handleChange, handleSubmit }: Props){
    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <label htmlFor="inputSearch">
                    <input 
                        id="inputSearch"
                        type="text" 
                        onChange={handleChange}
                        value={keyword}
                        placeholder="Write here..." />
                </label>
                <button data-testid='submit-btn'>
                    <img src="https://res.cloudinary.com/dp3chx1yj/image/upload/v1688331217/dictonary-api/icon-search_jgvnfe.svg" alt="search-icon" />
                </button>
            </form>
        </div>
    )
}