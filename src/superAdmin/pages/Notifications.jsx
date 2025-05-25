import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { handleNewNotification, fetchNotifications } from "../helpers/notification";
import Input from "../../vendor/components/UI/Input";
import Button from "../../vendor/components/UI/Button";
import SimpleDrawer from "../components/SimpleDrawer";
import NotificationTable from "../components/Tables/NotificationTable";
import "react-toastify/dist/ReactToastify.css";

function Notifications() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const tokenResult = await user.getIdTokenResult(true);
        setRole(tokenResult.claims.role);
        console.log("User role:", tokenResult.claims.role);
      } else {
        setRole(null);
        console.log("No user logged in");
      }
    });

    return () => unsubscribe();
  }, []);

  const addNotification = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await handleNewNotification(content, title);

      toast("Notification sent", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "dark",
        transition: Bounce,
      });

      setTitle("");
      setContent("");
    } catch (err) {
      console.error("Error sending notification:", err);
    } finally {
      setLoading(false);
    }
  };

  const loadNotifications = async () => {
    const latest = await fetchNotifications();
    setNotifications(latest);
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  return (
    <section className="flex min-h-screen bg-gray-50">
      <SimpleDrawer />

      <main className="flex-1 p-6">
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-10">
          Notifications
        </h1>

        <section>
          <form onSubmit={addNotification}>
            <Input
              value={title}
              labelText="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              value={content}
              labelText="Content"
              onChange={(e) => setContent(e.target.value)}
            />

            <div className="mt-10">
              <Button BtnText={loading ? "Saving..." : "Send Notification"} />
            </div>
          </form>
        </section>

        <section>
          <NotificationTable tktData={notifications} />
        </section>
      </main>

      <ToastContainer />
    </section>
  );
}

export default Notifications;
