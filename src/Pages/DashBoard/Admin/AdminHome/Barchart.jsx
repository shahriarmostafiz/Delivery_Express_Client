/* eslint-disable react/prop-types */
import React from 'react';
import Chart from 'react-apexcharts';

const Barchart = ({ data }) => {

    const bookingDates = [];
    const bookingCounts = {};


    data.forEach(order => {
        const bookingDate = order.bookingDate.split('T')[0]; // Extracting date part
        bookingDates.push(bookingDate);

        // Count bookings for each date
        bookingCounts[bookingDate] = (bookingCounts[bookingDate] || 0) + 1;
    });

    // Convert bookingCounts object to an array of counts
    const bookingCountsArray = Object.values(bookingCounts);
    console.log("Booking Dates:", bookingDates);
    console.log("Booking Counts:", bookingCountsArray);
    const uniqueBookingDates = [];
    bookingDates.forEach(date => {
        if (!uniqueBookingDates.includes(date)) {
            uniqueBookingDates.push(date);
        }
    });
    console.log(uniqueBookingDates);
    // const bookingDates = data?.map(item => item.bookingDate);
    // const labels = bookingDates?.map(date => new Date(date.toString()))
    // const bookingCount = bookingDates.reduce((acc, date) => {
    //     const formattedDate = new Date(date).toString();
    //     acc[formattedDate] = (acc[formattedDate] || 0) + 1;
    //     return acc
    // }, {})
    const chartOptions = {
        chart: {
            id: "bar-chart",
        },
        title: {
            text: "Bookings Per day",
            style: { fontSize: 30, },
        },


        xaxis: { categories: uniqueBookingDates }
    }
    const chartSeries = [
        { name: "Booking Count", data: bookingCountsArray }
    ]


    return (

        <div className='w-full text-center'>
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                width="80%"
                height="400"
            />

        </div>
    );
};

export default Barchart;