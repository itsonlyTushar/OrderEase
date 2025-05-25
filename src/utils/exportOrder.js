import { formatISODate } from "./latestOrder";

export const convertOrdersToCSV = (orders) => {
  if (!orders || !orders.length) return "";

  const headers = [
    "orderId",
    "orderedAt",
    "items",
    "totalItems",
    "orderStatus",
    "grandTotal",
    "tableNo",
    "description",
  ];

  const rows = orders.map((order) => {
    const itemsList = (order.items || [])
      .map((item) => `${item.name} - ${item.price}`)
      .join(" | ");

    return [
      order.orderId,
      formatISODate(order.orderedAt),
      itemsList,
      order.items.length,
      order.orderStatus,
      order.grandTotal,
      order.tableNo,
      order.description || "",
    ]
      .map((field) => JSON.stringify(field ?? ""))
      .join(",");
  });

  return [headers.join(","), ...rows].join("\n");
};

export const downloadCSV = (csvData, filename = "orders.csv") => {
  const blob = new Blob([csvData], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = filename;
  a.click();

  URL.revokeObjectURL(url);
};

export const exportOrdersCSV = (orders, vendorId) => {
  const csv = convertOrdersToCSV(orders);
  downloadCSV(csv, `orders-${vendorId.uid}.csv`);
};
