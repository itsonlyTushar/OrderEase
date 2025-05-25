import { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Menu,
  IconButton,
  Badge,
  Typography,
} from "@mui/material";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { fetchNotifications } from "../../../superAdmin/helpers/notification";

function VendorNotification() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications().then(setNotifications);
  }, []);

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton color="inherit" onClick={(e) => setAnchorEl(e.currentTarget)}>
        <Badge badgeContent={notifications.length} color="error">
          <IoNotificationsCircleOutline className="text-3xl text-blackBg" />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        PaperProps={{ style: { width: 300 } }}
      >
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <Typography variant="subtitle1">Notifications</Typography>
          <Typography
            variant="caption"
            color="primary"
            style={{ cursor: "pointer" }}
          >
            Mark all as read
          </Typography>
        </div>

        <List>
          {notifications.length === 0 ? (
            <ListItem>
              <ListItemText primary="No new notifications" />
            </ListItem>
          ) : (
            notifications.map(({ title, content }, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemText
                  primary={<Typography fontWeight="bold">{title}</Typography>}
                  secondary={
                    <Typography variant="body2" color="textSecondary">
                      {content}
                    </Typography>
                  }
                />
              </ListItem>
            ))
          )}
        </List>
      </Menu>
    </>
  );
}

export default VendorNotification;
