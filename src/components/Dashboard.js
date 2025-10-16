import React from "react"; // ensure access to React
import ReactApexChart from "react-apexcharts"; // import ApexCharts component
import "./Sidebar.css";


// constant Array of data to call in the charts
const COLORS = ["#f9a826", "#4a90e2", "#e74c3c", "#2ecc71", "#9b59b6"];

// Data
const lineData = [40, 80, 100, 120, 160, 200];
const lineCategories = ["2020", "2022", "2024", "2026", "2027", "2030"];

const pieData = [
    { name: "Active", value: 30 },
    { name: "Pending", value: 15 },
];

const dealsData = [
    { category: "Active", value: 18 },
    { category: "Deactive", value: 15 },
    { category: "Paused", value: 4 },
    { category: "Under Review", value: 2 },
    { category: "Expired", value: 10 },
];

function Dashboard() {
    // Line Chart 
    // it’s a configuration (a set of instructions) 
    // that tells ApexCharts how to draw the chart.
    const lineOptions = {
        chart: {
            id: "customers-chart",
            toolbar: { show: false }
        },
        xaxis: { categories: lineCategories },

        stroke: { curve: "smooth", width: 3 },
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                gradientToColors: ["#ffe28a"],
                opacityFrom: 0.7,
                opacityTo: 0.2
            }
        },
        colors: ["#f9a826"],
        dataLabels: { enabled: false },
        tooltip: { theme: "light" },
        grid: { borderColor: "#eee" },
    };

    const pieOptions = {
        labels: pieData.map(d => d.name),
        colors: COLORS,
        legend: { position: "bottom" },
        tooltip: { theme: "light" },
    };

    const pieSeries = pieData.map(d => d.value);

    // Bar Chart Options
    const barOptions = {
        chart:
        {
            id: "deals-chart",
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                borderRadius: 8,
                columnWidth: "50%"
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: dealsData.map(d => d.category)
        },
        colors: COLORS,
        tooltip: {
            theme: "light"
        },
        grid: {
            borderColor: "#eee"
        },
    };

    const barSeries = [{
        name: "Deals",
        data: dealsData.map(d => d.value)
    }];

    return (
        <main className="dashboard">
            {/* Top Cards */}
            <div className="top-cards">
                <div className="card">
                    <div className="left">
                        <h4>Earnings</h4>
                        <p>$10,000</p>
                    </div>
                    <span className="right">+30%</span>
                </div>

                <div className="card">
                    <div className="left">
                        <h4>Deals</h4>
                        <p>17K</p>
                    </div>
                    <span className="right">+60%</span>
                </div>

                <div className="card">
                    <div className="left">
                        <h4>Today Earnings</h4>
                        <p>$1990</p>
                    </div>
                    <span className="right">-10%</span>
                </div>

                <div className="card">
                    <div className="left">
                        <h4>Converted Deals</h4>
                        <p>48%</p>
                    </div>
                    <span className="right">+5%</span>
                </div>
            </div>


            {/* Grid */}
            <div className="main-grid">
                {/* Box 1: Customers */}
                <div className="box">
                    <h3>Customers</h3>
                    <ReactApexChart
                        options={lineOptions}
                        series={[{ name: "Users", data: lineData }]}
                        type="area"
                        height={200}
                    />
                </div>

                {/* Box 2: Vendors */}
                <div className="box">
                    <h3>Vendors</h3>
                    <ReactApexChart
                        options={pieOptions}
                        series={pieSeries}
                        type="pie"
                        height={200}
                    />
                </div>

                {/* Box 3: Deals */}
                <div className="box">
                    <h3>Deals Overview</h3>
                    <ReactApexChart
                        options={barOptions}
                        series={barSeries}
                        type="bar"
                        height={250}
                    />
                </div>

                {/* Boxes 4-9 (placeholder content) */}
                <div className="box"><h3>Performance</h3></div>
                <div className="box"><h3>Subscriptions</h3></div>
                <div className="box"><h3>Revenue Growth</h3></div>
                <div className="box"><h3>Notifications</h3></div>
                <div className="box"><h3>User Feedback</h3></div>
                <div className="box"><h3>App Usage</h3></div>
            </div>
        </main>
    );
}

export default Dashboard;
