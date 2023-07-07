const fontOptions = {
  first: "Sans serif",
  second: 'Serif',
  third: 'Mono'
}

export default function HeaderFontMenu(){
  return (
    <div className="header__menu" data-testid="fonts-menu">
      <ul>
      {
        Object.values(fontOptions).map(elem => (
          <li key={elem} className="header__menu-option">
            <h3>{elem}</h3>
          </li>
        ))
      }
      </ul>
    </div>
  )
}