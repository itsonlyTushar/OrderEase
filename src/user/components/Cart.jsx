import {
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Typography,
  IconButton,
  Box,
  Button,
  Divider,
} from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useState } from "react";
import { addOrder } from "../../utils/addOrder";
import { Bounce, toast, ToastContainer } from "react-toastify";

function Cart({
  open,
  onClose,
  cartItems = {},
  menuItems = [],
  onAdd,
  onRemove,
  vendorId,
  tableNo,
}) {
  const [loading, setLoading] = useState(false);

  const handleOrder = async () => {
    try {
      setLoading(true);
      await addOrder(vendorId, tableNo, cartItems, menuItems);

      toast.success("Order Placed", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (err) {
      console.error("Error placing order:", err);
      toast.error("Error placing order", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find((item) => item.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const getCartItemDetails = () => {
    return Object.entries(cartItems)
      .map(([itemId, quantity]) => {
        const item = menuItems.find((item) => item.id === itemId);
        return item ? { ...item, quantity } : null;
      })
      .filter(Boolean);
  };

  const cartItemsList = getCartItemDetails();
  const total = calculateTotal();

  const drawerContent = (
    <Box sx={{ p: 2, width: "100%", maxWidth: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" component="div">
          Your Cart
        </Typography>
        <IconButton onClick={onClose}>
          <IoMdClose />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {cartItemsList.length > 0 ? (
        <>
          <List sx={{ width: "100%" }}>
            {cartItemsList.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  px: 0,
                  py: 1,
                }}
              >
                <ListItemText
                  primary={item.name}
                  secondary={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <LiaRupeeSignSolid />
                      <Typography
                        variant="body2"
                        component="span"
                        sx={{ ml: 0.5, color: "text.secondary" }}
                      >
                        {item.price}
                      </Typography>
                    </Box>
                  }
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    border: "1px solid #f8d7da",
                    borderRadius: 2,
                    backgroundColor: "#f8d7da",
                    px: 1,
                  }}
                >
                  <Button
                    onClick={() => onRemove(item.id)}
                    sx={{ minWidth: "30px", p: 0 }}
                  >
                    -
                  </Button>
                  <Typography>{item.quantity}</Typography>
                  <Button
                    onClick={() => onAdd(item.id)}
                    sx={{ minWidth: "30px", p: 0 }}
                  >
                    +
                  </Button>
                </Box>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="subtitle1">Total Amount:</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LiaRupeeSignSolid />
              <Typography
                variant="subtitle1"
                component="span"
                sx={{ fontWeight: "bold", ml: 0.5 }}
              >
                {total}
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            fullWidth
            onClick={handleOrder}
            disabled={loading}
            sx={{
              bgcolor: "#212121",
              color: "white",
              "&:hover": {
                bgcolor: "#000000",
              },
            }}
          >
            {loading ? "Placing Order..." : "Place Order"}
          </Button>
        </>
      ) : (
        <Box sx={{ textAlign: "center", py: 4 }}>
          <Typography variant="body1">Your cart is empty</Typography>
          <Button onClick={onClose} sx={{ mt: 2, color: "#212121" }}>
            Continue Shopping
          </Button>
        </Box>
      )}
    </Box>
  );

  return (
    <>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={onClose}
        onOpen={() => {}}
        PaperProps={{
          sx: {
            maxHeight: "80vh",
            borderTopLeftRadius: 34,
            borderTopRightRadius: 34,
          },
        }}
      >
        {drawerContent}
      </SwipeableDrawer>
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
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default Cart;
