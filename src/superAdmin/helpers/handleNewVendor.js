import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../auth/firebase";

export const addNewVendor = async (
  email,
  vendorName,
  password,
  subscribeDate,
  country,
  city,
  description,
  contact,
  owner,
  plan
) => {
  try {
    const vendorCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userId = vendorCred.user.uid;

    const userRef = doc(db, "users", userId);

    const userData = {
      vendorName,
      vendorId: userId,
      vendorEmail: email,
      subscribeDate,
      country,
      city,
      description,
      contact,
      owner,
      plan,
      role: "admin",
    };

    await setDoc(userRef, userData);
    return { success: true, userId, userData };
  } catch (err) {
    console.error("Error while creating vendor:", err);
  }
};

export const fetchVendors = async () => {
  const vendorRef = collection(db, "users");

  const snapShot = await getDocs(vendorRef);

  const vendors = snapShot.docs.map((doc) => ({
    docId: doc.id,
    ...doc.data(),
  }));

  return vendors;
};
