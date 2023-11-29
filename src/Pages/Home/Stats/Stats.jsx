import CountUp from 'react-countup';
import Numbers from './countUp';
import useStatData from '../../../hooks/useStats';
import LoadingComponent from '../../../Components/LoadingComponent/LoadingComponent';
const Stats = () => {
    const [statsData, refetchStats, isStatPending] = useStatData()
    if (isStatPending) {
        return <LoadingComponent />

    }

    const { allParcel, parcelDelivered, userTotal } = statsData
    console.log(allParcel, parcelDelivered, userTotal);

    return (
        <div className=" my-5 md:my-8 lg:my-12 flex justify-center">
            <div className="stats stats-vertical lg:stats-horizontal shadow min-w-full lg:min-w-[800px]">
                {/* to do 
add the stats from the api  */}
                <div className="w-full flex flex-col justify-center items-center stat">
                    <div className="font-semibold stat-title ">Parcel Booked</div>
                    <div className="stat-value text-blue-600">
                        <Numbers number={allParcel}></Numbers>
                        {/* 31K */}
                        {/* <CountUp start={0} end={31} delay={.5}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} /> k
                                </div>
                            )}
                        </CountUp> */}

                    </div>
                    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                </div>

                <div className="w-full flex flex-col justify-center items-center stat">
                    <div className="font-semibold stat-title">Parcels Delivered</div>
                    <div className="stat-value text-blue-600">
                        <Numbers number={parcelDelivered}></Numbers>
                    </div>
                    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                </div>

                <div className="w-full flex flex-col justify-center items-center stat">
                    <div className="font-semibold stat-title">New Registers</div>
                    <div className="stat-value text-blue-600">
                        <Numbers number={userTotal}></Numbers>
                    </div>
                    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                </div>

            </div>
        </div>
    );
};

export default Stats;