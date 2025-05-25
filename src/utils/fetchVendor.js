import { doc, getDoc } from "firebase/firestore";
import { db } from "../auth/firebase";

export const fetchVendorsDetails = async (user) => {
  try {
    const vendorRef = doc(db, "users", user);
    const snapshot = await getDoc(vendorRef);
    const fetchedData = snapshot.data();
    return fetchedData;
  } catch (error) {
    console.error("Error fetching vendor details:", error);
  }
};
