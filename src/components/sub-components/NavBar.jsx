import { useContext } from 'react';
import { ToggleElement } from '../../helpers/Context';

function NavBar() {
    const { isActive } = useContext(ToggleElement);
    return (
        <nav className={`fixed transition w-full ease-in-out delay-200 top-12 overflow-y-auto custom-scrollbar z-10 flex flex-col min-h-auto max-h-auto bottom-0 gap-8 p-4 transform bg-white shadow-md xl:sticky lg:py-8 xl:px-8 lg:w-3/12 xl:translate-x-0 xl:col-span-3 xl:w-auto lg:top-14 xl:shadow-none xl:min-h-screen ${isActive ? 'translate-x-0' : '-translate-x-full'}`}>

            <ul className="flex flex-col gap-1.5">
                
                <li>
                    <a className="flex items-center gap-4 px-3 py-2 font-semibold text-white rounded-md bg-dark-blue" href="/">
                        <i className="relative text-xl fr fi-rr-apps top-1"></i>
                        Dashboard
                    </a>
                </li>

                <li>
                    <a className="flex items-center gap-4 px-3 py-2 font-semibold rounded-md text-main hover:text-white hover:bg-dark-blue" href="/">
                        <i className="relative text-xl fr fi-rr-shopping-cart top-1"></i>
                        NFT Store
                    </a>
                </li>

                <li>
                    <a className="flex items-center gap-4 px-3 py-2 font-semibold rounded-md text-main hover:text-white hover:bg-dark-blue" href="/">
                        <i className="relative text-xl fr fi-rr-time-check top-1"></i>
                        Active Bid
                    </a>
                </li>

                <li>
                    <a className="flex items-center gap-4 px-3 py-2 font-semibold rounded-md text-main hover:text-white hover:bg-dark-blue" href="/">
                        <i className="relative text-xl fr fi-rr-star top-1"></i>
                        Favorite NFT's
                    </a>
                </li>

            </ul>

            <div className="flex flex-col gap-2">

                <h3 className="text-xl font-bold">
                    Account
                </h3>

                <ul className="flex flex-col gap-1.5">
                    
                    <li>
                        <a className="flex items-center gap-4 px-3 py-2 font-semibold rounded-md text-main hover:text-white hover:bg-dark-blue" href="/">
                            <i className="relative text-xl fr fi-rr-user top-1"></i>
                            My Portfolio
                        </a>
                    </li>

                    <li>
                        <a className="flex items-center gap-4 px-3 py-2 font-semibold rounded-md text-main hover:text-white hover:bg-dark-blue" href="/">
                            <i className="relative text-xl fr fi-rr-briefcase top-1"></i>
                            Wallet
                        </a>
                    </li>

                    <li>
                        <a className="flex items-center gap-4 px-3 py-2 font-semibold rounded-md text-main hover:text-white hover:bg-dark-blue" href="/">
                            <i className="relative text-xl fr fi-rr-settings top-1"></i>
                            Setting
                        </a>
                    </li>

                </ul>

            </div>

            <div className="grid gap-4 p-8 text-center place-content-center text-search-color rounded-2xl bg-gradient-to-br from-pink-700 to-pink-400">

                <h3 className="text-xl font-bold">
                    Information
                </h3>

                <p>
                    There will be server maintenance on the 30th
                </p>

                <a className="p-2.5 font-bold bg-white rounded-full text-dark-blue shadown-sm border border-pink-400 hover:bg-pink-600 hover:text-white hover:border-white" href="/">
                    Read More
                </a>

            </div>

        </nav>
    )
}

export default NavBar