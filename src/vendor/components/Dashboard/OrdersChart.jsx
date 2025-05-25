import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function OrdersChart({ recentOrders }) {
    
  const chartData = [
    {
      status: "Pending",
      count: recentOrders.filter((order) => order.orderStatus === "Pending").length,
    },
    {
      status: "Fullfilled",
      count: recentOrders.filter((order) => order.orderStatus === "Fullfilled").length
    }
  ];
  return (
    <div className="w-full h-[200px]">
      <ResponsiveContainer>
        <BarChart data={chartData}>
          <XAxis dataKey='status' />
          <YAxis />
          <Tooltip />
          <Bar dataKey='count' fill='#ffff' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
