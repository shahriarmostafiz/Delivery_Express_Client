// import CountUp from 'react-countup';
// import AnimateNumbers from './CountUp';
import useStatData from '../../../hooks/useStats';
import LoadingComponent from '../../../Components/LoadingComponent/LoadingComponent';
import Sectiontitle from '../../../Components/Title/Sectiontitle';
const Stats = () => {
    const [statsData, refetchStats, isStatPending] = useStatData()
    if (isStatPending) {
        return <LoadingComponent />

    }

    const { allParcel, parcelDelivered, userTotal } = statsData
    console.log(allParcel, parcelDelivered, userTotal);

    return (
        <div>
            <Sectiontitle heading={"Insights"} subHeading={"Explore our growth"}></Sectiontitle>
            <div className=" my-5 md:my-8 lg:my-12 flex justify-center" >

                <div className="stats stats-vertical lg:stats-horizontal shadow min-w-full lg:min-w-[800px]">
                    {/* to do 
add the stats from the api  */}
                    <div className="w-full flex flex-col justify-center items-center stat">
                        <div className="font-semibold stat-title ">Parcel Booked</div>
                        <div className="stat-value text-blue-600">
                            {/* <Numbers number={allParcel}></Numbers> */}
                            {/* <AnimateNumbers n={allParcel} ></AnimateNumbers> */}

                            {allParcel}
                        </div>

                    </div>

                    <div className="w-full flex flex-col justify-center items-center stat">
                        <div className="font-semibold stat-title">Parcels Delivered</div>
                        <div className="stat-value text-blue-600">
                            {parcelDelivered}
                            {/* <Numbers number={parcelDelivered}></Numbers>
                         */}
                        </div>
                        {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                    </div>

                    <div className="w-full flex flex-col justify-center items-center stat">
                        <div className="font-semibold stat-title">New Registers</div>
                        <div className="stat-value text-blue-600">
                            {userTotal}
                            {/* <Numbers number={userTotal}></Numbers> */}
                        </div>
                        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Stats;