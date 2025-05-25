import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Faq() {
  return (
    <section className="px-4 sm:px-8 md:px-16 py-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-blackBg">FAQ's</h1>
      </div>

      <div className="space-y-4">
        <Accordion  sx={{ borderRadius: 2 }} >
          <AccordionSummary expandIcon={<MdOutlineKeyboardArrowDown />}>
            <Typography sx={{ color: "#2a2a2a", fontWeight: "700" }}>
              Do customers need to install an app?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>No. Everything runs in the browser — just scan and order.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion  sx={{ borderRadius: 2 }}>
          <AccordionSummary expandIcon={<MdOutlineKeyboardArrowDown />}>
            <Typography sx={{ color: "#2a2a2a", fontWeight: "700" }}>
              Can I update the menu in real time?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can update pricing, availability, and add or remove items instantly.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion  sx={{ borderRadius: 2 }}>
          <AccordionSummary expandIcon={<MdOutlineKeyboardArrowDown />}>
            <Typography sx={{ color: "#2a2a2a", fontWeight: "700" }}>
              How to receive payments for orders?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Payment can be received at the restaurant counter only.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion  sx={{ borderRadius: 2 }}>
          <AccordionSummary expandIcon={<MdOutlineKeyboardArrowDown />}>
            <Typography sx={{ color: "#2a2a2a", fontWeight: "700" }}>
              I already have paper menus. Why is your digital menu better?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our digital QR code menu is contactless and always available. Guests don’t have to
              wait for a waiter or search for a menu. Less waiting = more orders.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}

export default Faq;
