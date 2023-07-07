import { useState } from 'react'
import { IoToggleSharp } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi";
import HeaderFontMenu from "./HeaderFontMenu";

export default function Header(){

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
                            <span>Sans Serif</span> 
                            <figure
                                className="header__iconBtn">
                            </figure>
                        </button>
                        {
                            showFontMenu && <HeaderFontMenu />
                        }
                    </div>
                    <div className="header__toggle">
                        <button>
                            <IoToggleSharp className="header__toggle-btn" />
                        </button>
                        <HiOutlineMoon className="header__toggle-logo" data-testid="toggle-icon" />
                    </div>
                </div>
            </header>
        </>
    )
}