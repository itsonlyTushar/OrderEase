import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../auth/firebase";
import { formatISODate } from "../../utils/latestOrder";
import { nanoid } from "@reduxjs/toolkit";

export const fetchNotifications = async () => {
  try {
    const ticketsRef = collection(db, "notifications");

    const snapshot = getDocs(ticketsRef);

    const tickets = (await snapshot).docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return tickets;
  } catch (err) {
    alert(`error while fetching order`, err);
  }
};

export const deleteNotification = async (ticketId) => {
  try {
    const ticketRef = doc(db, "notifications", ticketId);

    await deleteDoc(ticketRef);

  } catch (err) {
    alert('Error while deleting the doc' + err.message)
  }
}


export const handleNewNotification = async (content, title) => {
    try {
      const notificationRef = doc(collection(db, "notifications"));
      const date = new Date();
      const iso = date.toISOString();

      await setDoc(notificationRef, {
        docId: notificationRef.id,
        notificationId: nanoid(),
        content: content,
        title: title,
        date: formatISODate(iso),
      });

    } catch (err) {
      console.log("Error: " + err.message);
    }
  };