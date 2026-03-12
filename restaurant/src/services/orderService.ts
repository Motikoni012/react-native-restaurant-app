import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getUserOrders = async (uid: string) => {
  try {
    const q = query(
      collection(db, "orders"),
      where("userId", "==", uid)
    );

    const snapshot = await getDocs(q);

    const orders: any[] = [];

    snapshot.forEach((doc) => {
      orders.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return orders;

  } catch (error) {
    console.log("Fetch orders error:", error);
    return [];
  }
};