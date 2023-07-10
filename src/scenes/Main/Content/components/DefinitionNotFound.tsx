export default function DefinitionNotFound() {
  return (
    <div className="main__error">
      <img src="https://res.cloudinary.com/dp3chx1yj/image/upload/v1688689572/dictonary-api/bad-face_j1gbis.svg" alt="img-emogi" />
      <h2>No Definitions Found</h2>
      <p data-testid='paragraph'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    </div>
  )
}