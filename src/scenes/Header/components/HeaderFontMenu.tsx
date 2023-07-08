import { FontOptions } from "../../../types"

interface Props {
  fontChange: (font: FontOptions) => void
  showFontMenu: () => void
}

interface FontFamilyOptions {
  first: FontOptions,
  second: FontOptions,
  third: FontOptions
}

const fontOptions: FontFamilyOptions = {
  first: "Sans serif",
  second: 'Serif',
  third: 'Mono'
}

export default function HeaderFontMenu({ fontChange, showFontMenu }: Props){

  const handleClickFontOption = (value: FontOptions) =>{
    fontChange(value)
    showFontMenu()
  }

  return (
    <div className="header__menu" data-testid="fonts-menu">
      <ul>
      {
        Object.values(fontOptions).map((value: FontOptions) => (
          <li key={value} className="header__menu-option" onClick={() => handleClickFontOption(value)}>
            <h3>{value}</h3>
          </li>
        ))
      }
      </ul>
    </div>
  )
}