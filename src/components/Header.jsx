import { useContext, useState } from 'react';
import { ToggleElement } from '../helpers/Context';
import userImage from '../assets/img/user.png';

function Header() {
    const { isActive, setNavActive } = useContext(ToggleElement);
    const [isSearchBarActive, setSearchBarActive] = useState(false);
    
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between gap-16 px-4 py-3 bg-white xl:px-8">
            
            <div className="flex items-center justify-between flex-grow flex-shrink-0 gap-4">

                <a className="font-pacifico text-lg flex-shrink-0 font-semibold tracking-wider text-dark-blue" href="/">
                    Geek NFT
                </a>

                <div className="flex flex-shrink-0 items-center gap-5 lg:hidden">

                    <button className="text-xl" type="button" aria-label="Search bar toggle" onClick={() => { 
                        setSearchBarActive(() => !isSearchBarActive);
                    }}>
                        <i className="relative fr fi-rr-search top-1.5"></i>
                    </button>

                    <button className="text-xl" type="button" aria-label="Navigation toggle" onClick={() => {
                        setNavActive(() => !isActive);
                    }}>
                        <i className="relative fr fi-rr-menu-burger top-1.5"></i>
                    </button>

                </div>

            </div>

            <div className={`absolute transition ease-in-out delay-200 flex flex-col gap-4 py-4 px-6 transform bg-gray-50 rounded-b-xl shadow-2xl shadow-inner w-90 left-5-percent top-full sm:p-8 lg:static lg:flex-row lg:justify-between lg:shadow-none lg:p-0 lg:gap-16 lg:translate-x-0 lg:opacity-100 lg:bg-transparent ${isSearchBarActive ? 'translate-x-0' : '-translate-x-150'}`}>

                <div className="flex flex-col items-center flex-grow gap-2 lg:flex-row lg:gap-4">

                    <form className="flex flex-grow border bg-white border-gray-300 border-opacity-50 focus-within:shadow-none w-full rounded-md bg-opacity-30 lg:w-auto lg:shadow-inner">

                        <label className="w-full rounded-l-md bg-opacity-30 bg-white" htmlFor="searchBar">
                            <input className="rounded-l-md bg-opacity-30 w-full bg-white py-1.5 pl-5" type="search" placeholder="Search Artwork" id="searchBar" />
                        </label>

                        <button className="pl-5 pr-5 rounded-r-md bg-opacity-25 bg-white">
                            <i className="fr fi-rr-search relative top-1"></i>
                        </button>

                    </form>

                    <span className="font-semibold">
                        Wed, 11 Nov, 2021. 10:48pm
                    </span>

                </div>

                <div className="flex items-center justify-between gap-6 lg:justify-start">

                    <button className="order-2 text-lg rounded-full shadow-lg bg-white text=dark-blue pt-1.5 px-2 lg:order-1" type="button" aria-label="Notifications">
                        <i className="fr fi-rr-bell"></i>
                    </button>

                    <div className="flex items-center order-1 gap-2 lg:order-2">

                        <img className="w-8 h-8 rounded-full" src={userImage} alt="Wisdom Ojimah" />
                        
                        <div>
                            <h4 className="font-bold text-md">
                                Wisdom
                            </h4>
                            <p className="-mt-0.5 text-sm text-main">
                                Member
                            </p>
                        </div>

                    </div>

                </div>

                <button className="hidden text-xl lg:block xl:hidden" type="button" aria-label="Navigation toggle" onClick={() => { 
                    setNavActive(() => !isActive);
                }}>
                    <i className="relative fr fi-rr-menu-burger top-1.5"></i>
                </button>

            </div>

        </header>
    )
}

export default Header
