import { collection, getDocs, query, orderBy, setDoc, doc } from "firebase/firestore";
import { db } from "../auth/firebase"; 
import * as XLSX from 'xlsx'
import { saveAs } from "file-saver";

export const fetchOrders = async (vendorId) => {
  try {
    const ordersRef = collection(db, "vendors", vendorId, "orders");


    const q = query(ordersRef, orderBy("orderedAt", "desc"));
    const snapshot = await getDocs(q);

    const orders = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return { success: true, orders };
  } catch (err) {
    alert("Error fetching orders:", err);
    return { success: false, error: err.message };
  }
};

export const formatISODate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 0-based months
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};


export const updateOrderStatus = async (vendorId, orderId, status) => {
  try {
    const orderRef = doc(db, "vendors", vendorId, "orders", orderId);

    await setDoc(orderRef, { orderStatus: status }, { merge: true });

    return { success: true };
  } catch (err) {
    console.error("❌ Error updating order status:", err);
    return { success: false, error: err.message };
  }
};



