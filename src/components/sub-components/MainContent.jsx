import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
        display: false,
        position: 'bottom',
    },
    title: {
        display: false,
        text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function MainContent({ posts }) {
    return (
        <div className="grid col-span-12 gap-8 py-6 px-4 lg:gap-12 lg:col-span-9 xs:px-6 sm:px-4 lg:px-6 xl:px-8 xl:col-span-6 bg-main lg:rounded-t-xl">
            
            <div className="grid grid-cols-12 gap-4 rounded-xl">

                <div className="flex flex-col col-span-12 gap-8 p-8 text-white md:place-content-between rounded-xl bg-gradient-to-br from-blue-600 to-dark-blue sm:col-span-6 lg:col-span-7">
                    
                    <h1 className="text-2xl font-bold tracking-wider lg:w-3/5">
                        Sell And Get Your Rare NFT Here
                    </h1>
                    
                    <a className="inline w-auto py-2.5 px-3 font-bold text-center bg-white border rounded-full shadow-md lg:w-1/2 text-dark-blue hover:bg-dark-blue hover:text-white hover:border-dark-blue" href="/">
                        Explore More
                    </a>
                    
                </div>

                <div className="flex flex-col justify-between col-span-12 gap-4 p-4 bg-white rounded-xl sm:col-span-6 lg:col-span-5">
                    
                    <div className="flex flex-wrap items-center justify-between gap-4">

                        <h2 className="text-xl font-bold">
                            1 Month Earnings
                        </h2>

                        <button>
                            <i className="relative fr fi-rr-refresh top-1.5"></i>
                        </button>

                    </div>

                    <Bar options={options} data={data} />

                </div>
                
            </div>

            <div className="flex flex-col gap-5">

                <div className="flex flex-wrap items-center justify-between">
                    <h2 className="text-xl font-bold text-main-black">
                        Trending NFT
                    </h2>
                    <a className="px-3 py-1.5 font-bold text-center text-blue-600 bg-white border border-blue-700 rounded-full hover:bg-dark-blue hover:text-white hover:border-dark-blue" href="/">
                        View More
                    </a>
                </div>

                <div className="grid items-start content-center justify-center grid-cols-12 gap-4">

                    {posts.map((post) => (
                        <div className="relative col-span-12 rounded-xl sm:col-span-6 lg:col-span-4" key={post.id}>

                            <button className="bg-gray-500 text-white shadow-sm rounded-full pt-2 px-2.5 pb-1 absolute right-3 top-3 hover:bg-blue-600 hover:text-white">
                                <i className="fr fi-rr-heart"></i>
                            </button>
                            
                            <img className="object-cover object-center w-full h-1/2 rounded-t-xl" src={post.image} alt={post.title} />

                            <div className="flex flex-col gap-4 px-4 py-5 bg-white rounded-b-xl">

                                <div className="flex items-center justify-between gap-4">

                                    <h3 className="font-bold text-main-black">
                                        {post.title}
                                    </h3>

                                    <span className="font-semibold">
                                        {post.status}
                                    </span>

                                </div>

                                <div className="flex flex-col gap-1">
                                    
                                    <div className="flex items-center justify-between gap-4">

                                        <span className="font-semibold text-main-black">
                                            Ending In:
                                        </span>

                                        <span className="font-semibold">
                                            {post.endsWith}
                                        </span>

                                    </div>

                                    <div className="flex items-center justify-between gap-4">

                                        <span className="font-bold text-main-black">
                                            {post.totalTime}
                                        </span>

                                        <span className="font-bold">
                                            {post.value}
                                        </span>

                                    </div>

                                </div>
                                
                                <div className="flex items-center justify-between gap-4">
                                    <a className="px-3 py-1.5 font-bold text-center text-white border border-blue-700 rounded-full bg-gradient-to-br from-blue-700 to-dark-blue hover:from-white hover:to-white hover:text-blue-600 hover:border-dark-blue" href="/">
                                        View More
                                    </a>
                                    <button className="text-lg rounded-full shadow-xl bg-dark-blue text-white hover:bg-white hover:text-blue-600 pt-2 px-2.5 pb-0.5" type="button" aria-label="Notifications">
                                        <i className="fr fi-rr-shopping-cart"></i>
                                    </button>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default MainContent
