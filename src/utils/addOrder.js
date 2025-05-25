import {
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../auth/firebase";




export async function addOrder(vendorId, tableNo, cartItems, menuItems) {
  const date = new Date();

  const otherDate = date.toISOString();
  try {
 
    const orderItems = Object.entries(cartItems).map(([itemId, quantity]) => {
      const menuItem = menuItems.find((item) => item.id === itemId);
      return {
        menuId: menuItem?.menuId || "N/A", 
        name: menuItem?.name || "Unknown Item",
        price: menuItem?.price || 0,
        quantity,
      };
    });

    // Step 2: Calculate grand total
    const grandTotal = orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Step 3: Reference to vendor's orders subcollection
    const orderRef = doc(collection(db, "vendors", vendorId, "orders")); 

    // Step 4: Write order to Firestore
    await setDoc(orderRef, {
      orderId: orderRef.id,
      tableNo,
      grandTotal,
      items: orderItems,
      orderStatus: "Pending",
      orderedAt: otherDate,
    });

    return { success: true, orderId: orderRef.id };
  } catch (err) {
    console.error("Error placing order:", err.message);
    return { success: false, error: err.message };
  }
}
