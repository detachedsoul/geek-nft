function SideBar({ userDetails, notifications }) {

    return (
        <div className="col-span-12 flex flex-col justify-between gap-8 px-6 py-4 bg-white lg:sticky bottom-0 lg:top-12 lg:p-6 xl:p-8 lg:col-span-3 xl:col-span-3 xl:min-h-screen">
            
            <div className="flex flex-col gap-4">

                <h2 className="text-lg font-bold text-main-black">
                    Top Creators NFT
                </h2>

                {userDetails.map((userDetail) => (
                    <div className="flex items-center justify-between gap-8 overflow-y-auto custom-scrollbar" key={userDetail.id}>

                        <div className="flex items-center flex-shrink-0 gap-2">

                            <img className="rounded-full w-9 h-9" src={userDetail.image} alt={userDetail.name} />
                            
                            <div>
                                <h4 className="text-sm font-bold">
                                    { userDetail.name }
                                </h4>
                                <p className="-mt-0.5 font-semibold text-md text-main">
                                    { userDetail.username }
                                </p>
                            </div>

                        </div>

                        <button className="px-4 py-1.5 font-bold text-blue-600 rounded-full shadow-sm bg-search-color hover:bg-dark-blue hover:text-white">
                            Follow
                        </button>

                    </div>
                ))}

            </div>

            <div className="flex flex-col gap-4">

                <h2 className="text-lg font-bold text-main-black">
                    Notifications
                </h2>

                {notifications.map((notification) => (
                    <div className="flex items-start flex-shrink-0 gap-2 overflow-y-auto custom-scrollbar" key={notification.id}>

                        <img className="rounded-full w-9 h-9" src={notification.image} alt={notification.title} />
                        
                        <div className="flex flex-col justify-between flex-shrink-0 gap-2">
                            
                            <div>
                                <h4 className="text-sm font-bold">
                                    { notification.title }
                                </h4>
                                <p className="-mt-0.5 font-semibold text-md text-main-text-color">
                                    { notification.summary }
                                </p>
                            </div>

                            <p className="font-semibold text-main">
                                {notification.date}
                            </p>

                        </div>

                    </div>
                ))}
                
                <a className="py-2 px-3 font-bold text-center bg-white border rounded-full border-blue-700 text-blue-600 hover:bg-dark-blue hover:text-white hover:border-dark-blue" href="/">
                    View More
                </a>

            </div>

        </div>
    )
}

export default SideBar
