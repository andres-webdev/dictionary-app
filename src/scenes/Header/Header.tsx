import { useState } from 'react'
import { IoToggleSharp } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi";
import HeaderFontMenu from "./components/HeaderFontMenu";
import { FontOptions } from '../../types';

interface Props {
    toggleChange: () => void
    fontChange: (font: FontOptions) => void
    fontFamily: FontOptions
}

export default function Header({ toggleChange, fontChange, fontFamily }: Props){

    const [showFontMenu, setShowFontMenu] = useState(false)

    const handleChangeFontMenuBtn = () => {
        setShowFontMenu(elem => !elem)
    }

    return (
        <>
            <header>
                <img src="https://res.cloudinary.com/dp3chx1yj/image/upload/v1688331217/dictonary-api/logo_xgtbef.svg" alt="logo-app" />
                <div> 
                    <div className='header__fontContainer'>
                        <button 
                            className="header__fontBtn" 
                            data-testid="font-menu-btn"
                            onClick={handleChangeFontMenuBtn}
                            >
                            <span>{fontFamily}</span> 
                            <figure
                                className="header__iconBtn">
                            </figure>
                        </button>
                        {
                            showFontMenu && <HeaderFontMenu fontChange={fontChange} showFontMenu={handleChangeFontMenuBtn} />
                        }
                    </div>
                    <div className="header__toggle">
                        <button onClick={toggleChange}>
                            <IoToggleSharp className="header__toggle-btn" />
                        </button>
                        <HiOutlineMoon className="header__toggle-logo" data-testid="toggle-icon" />
                    </div>
                </div>
            </header>
        </>
    )
}