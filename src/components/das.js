
import React from "react";
import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, BarChart, Bar, CartesianGrid,
} from "recharts";
import "./Sidebar.css"; // same CSS file

const COLORS = ["#f9a826", "#4a90e2", "#e74c3c", "#2ecc71", "#9b59b6"];

const pieData = [
    { name: "Active", value: 30 },
    { name: "Redeemed", value: 15 },
    { name: "Cancelled", value: 5 },
];

const lineData = [
    { year: 2020, users: 40 },
    { year: 2022, users: 80 },
    { year: 2024, users: 100 },
    { year: 2026, users: 120 },
    { year: 2027, users: 160 },
    { year: 2030, users: 200 },
];

const dealsData = [
    { category: "Active", value: 18 },
    { category: "Deactive", value: 15 },
    { category: "Paused", value: 4 },
    { category: "Under Review", value: 2 },
    { category: "Expired", value: 10 },
];

function Dashboard() {
    return (
        <main className="dashboard">
            <div className="top-cards">
                <div className="card"><h4>Earnings</h4><p>$10,000</p><span>+30%</span></div>
                <div className="card"><h4>Deals</h4><p>17K</p><span>+60%</span></div>
                <div className="card"><h4>Today Earnings</h4><p>$1990</p><span>-10%</span></div>
                <div className="card"><h4>Converted Deals</h4><p>48%</p><span>+3%</span></div>
            </div>

            <div className="main-grid">
                {/* Box 1 */}
                <div className="box">
                    <h3>Customers</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={lineData}>
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="users" stroke="#f9a826" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Box 2 */}
                <div className="box">
                    <h3>Vendors</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={80}
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Box 3 */}
                <div className="box">
                    <h3>Deals Overview</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={dealsData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={30}>
                                {dealsData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Box 4 to 9 - placeholders for now */}
                <div className="box"><h3>Performance</h3><p>Coming soon...</p></div>
                <div className="box"><h3>Subscriptions</h3><p>Coming soon...</p></div>
                <div className="box"><h3>Revenue Growth</h3><p>Coming soon...</p></div>
                <div className="box"><h3>Notifications</h3><p>Coming soon...</p></div>
                <div className="box"><h3>Users Feedback</h3><p>Coming soon...</p></div>
                <div className="box"><h3>App Usage</h3><p>Coming soon...</p></div>
            </div>
        </main>
    );
}

export default Dashboard;
