import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import logo from "../../assets/imgs/secondaryLog.png";
import { Bounce, toast, ToastContainer } from "react-toastify";
import emailjs from "emailjs-com";

function Contact() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const contactUsForm = [
    {
      id: "name-field",
      placeHolder: "Enter your name...",
      label: "Your Name",
      type: "text",
      value: name,
      onFunc: (e) => setName(e.target.value),
    },
    {
      id: "subject-field",
      placeHolder: "Enter subject...",
      label: "Subject",
      type: "text",
      value: subject,
      onFunc: (e) => setSubject(e.target.value),
    },
    {
      id: "email-field",
      placeHolder: "Enter email...",
      label: "Email",
      type: "email",
      value: email,
      onFunc: (e) => setEmail(e.target.value),
    },
    {
      id: "contact-field",
      placeHolder: "Enter contact number...",
      label: "Contact",
      type: "tel",
      value: number,
      onFunc: (e) => setNumber(e.target.value),
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !description) {
      toast.error("Please fill in all required fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    setLoading(true);

    try {
      const templateParams = {
        name: name,
        email: email,
        subject: subject,
        phone: number,
        message: description,
        to_name: "Support Team",
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEYS,
      );

      toast.success("Your message has been sent successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

      setName("");
      setSubject("");
      setEmail("");
      setNumber("");
      setDescription("");

      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (err) {
      console.error("EmailJS Error:", err);

      toast.error("Failed to send message. Please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div onClick={handleOpen} className="cursor-pointer">
        Contact
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          onClick: handleClose,
          sx: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
      >
        <Box
          sx={{
            outline: "none",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 450 },
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
          }}
        >
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="flex justify-center">
              <img className="h-20" src={logo} alt="logo" />
            </div>
            <h1 className="text-lg text-center font-medium">
              Send us an email, we'll reach out!
            </h1>

            {contactUsForm.map((field) => (
              <div key={field.id} className="w-full text-blackBg">
                <label
                  htmlFor={field.id}
                  className="block text-sm mb-1 font-semibold text-lg"
                >
                  {field.label}{" "}
                  {(field.type === "text" || field.type === "email") && "*"}
                </label>
                <input
                  id={field.id}
                  className="w-full px-3 py-4 rounded-xl bg-gray-100 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  onChange={field.onFunc}
                  placeholder={field.placeHolder}
                  type={field.type}
                  value={field.value}
                  required={field.type === "text" || field.type === "email"}
                />
              </div>
            ))}

            <div className="w-full">
              <label
                htmlFor="descri-id"
                className="block text-sm mb-1 font-medium"
              >
                Describe Issue *
              </label>
              <textarea
                id="descri-id"
                className="w-full p-3 rounded-xl bg-gray-100 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-vertical min-h-[100px]"
                placeholder="Write here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-center mt-6">
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  bgcolor: "#000",
                  color: "#fff",
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 0, 0.85)",
                  },
                  "&:disabled": {
                    bgcolor: "rgba(0, 0, 0, 0.6)",
                  },
                }}
              >
                {loading ? (
                  <i className="ri-loader-line animate-spin"></i>
                ) : (
                  <>
                    <i className="ri-telegram-2-line mr-2 text-lg"></i> Send
                    Mail
                  </>
                )}
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default Contact;
