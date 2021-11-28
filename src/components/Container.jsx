import MainContent from './sub-components/MainContent';
import SideBar from './sub-components/SideBar';
import NavBar from './sub-components/NavBar';
import imagePath from '../assets/img/wisdom-ojimah.jpg';

function Container() {

    const userDetails = [
        {
            id: 1,
            name: "Wisdom Ojimah",
            username: "detachedsoul_",
            // image: "wisdom-ojimah.jpg"
            image: imagePath
        },
        {
            id: 2,
            name: "Precious Soye",
            username: "Soye-is tired",
            // image: "precious-soye.jpg"
            image: imagePath
        },
        {
            id: 3,
            name: "Promise Ikechukwu",
            username: "DePromise",
            // image: "promise-ikechukwu.jpg"
            image: imagePath
        }
    ];

    const notifications = [
        {
            id: 1,
            title: "Deprived of Freedom",
            summary: "Has Been Sold 41 ETH",
            date: "25 Nov, 2021, at 9:19pm",
            image: imagePath
        },
        {
            id: 2,
            title: "Demo Check",
            summary: "Some Random Title",
            date: "28 Nov, 2021, at 9:00am",
            image: imagePath
        },
        {
            id: 3,
            title: "Sins & Guilt",
            summary: "Lost Souls",
            date: "31 Nov, 2021, at 7:20am",
            image: imagePath
        }
    ];

    const posts = [
        {
            id: 1,
            title: "Tomorrow Is Not Promised",
            status: "137 ETH",
            endsWith: "Highest Bid",
            totalTime: "1h 39m 10s",
            value: "0.41 wETH",
            image: imagePath,
        },  
        {
            id: 2,
            title: "Demo Title",
            status: "452 ETH",
            endsWith: "Highest Bid",
            totalTime: "1h 39m 10s",
            value: "0.41 wETH",
            image: imagePath,
        },  
        {
            id: 3,
            title: "Can't Be Saved",
            status: "200 ETH",
            endsWith: "Highest Bid",
            totalTime: "1h 39m 10s",
            value: "0.41 wETH",
            image: imagePath,
        },  
        {
            id: 4,
            title: "Tomorrow Is Not Promised",
            status: "137 ETH",
            endsWith: "Highest Bid",
            totalTime: "1h 39m 10s",
            value: "0.41 wETH",
            image: imagePath,
        },  
        {
            id: 5,
            title: "Demo Title",
            status: "452 ETH",
            endsWith: "Highest Bid",
            totalTime: "1h 39m 10s",
            value: "0.41 wETH",
            image: imagePath,
        },  
        {
            id: 6,
            title: "Can't Be Saved",
            status: "200 ETH",
            endsWith: "Highest Bid",
            totalTime: "1h 39m 10s",
            value: "0.41 wETH",
            image: imagePath,
        },  
    ];

    return(
        <div className="relative grid items-start lg:p-0 grid-cols-12">
            
            <NavBar />
            <MainContent posts={posts} />
            <SideBar userDetails={userDetails} notifications={notifications} />

        </div>
    )
}

export default Container