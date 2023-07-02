import { IoToggleSharp } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi";

export default function Header(){
    return (
        <>
            <header>
                <img src="./src/assets/images/logo.svg" />
                <div> 
                    <div>
                        <button className="header__fontBtn">
                            <span>Sans Serif</span> 
                            <figure
                                className="header__iconBtn">
                                </figure>
                        </button>
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