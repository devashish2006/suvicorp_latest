import * as React from "react";

import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

import { Link } from "react-router-dom";

export default function TailwindFooter() {
  return (
    <Sheet
      variant="solid"
      sx={{
        backgroundColor: "black",
        padding: "2rem",
        color: "white",
        textAlign: "center",
        marginTop: "auto", // Ensures footer stays at the bottom
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Divider sx={{ my: 2, bgcolor: "gray" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          {/* Quick Links */}
          <List
            size="md"
            orientation="vertical"
            sx={{
              "--ListItem-radius": "8px",
              color: "white",
              textAlign: "left",
            }}
          >
            <ListSubheader sx={{ fontWeight: "bold", color: "white" }}>
              Quick Links
            </ListSubheader>
            <ListItem>
              <ListItemButton>Home</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>About Us</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Services</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Blog</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Contact Us</ListItemButton>
            </ListItem>
          </List>

          {/* Products/Services */}
          <List
            size="md"
            orientation="vertical"
            sx={{
              "--ListItem-radius": "8px",
              color: "white",
              textAlign: "left",
            }}
          >
            <ListSubheader sx={{ fontWeight: "bold", color: "white" }}>
              Products & Services
            </ListSubheader>
            <ListItem>
              <ListItemButton>Investment Services</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Corporate Banking</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Tax Solutions</ListItemButton>
            </ListItem>
          </List>

          {/* Legal & Compliance */}
          <List
            size="md"
            orientation="vertical"
            sx={{
              "--ListItem-radius": "8px",
              color: "white",
              textAlign: "left",
            }}
          >
            <ListSubheader sx={{ fontWeight: "bold", color: "white" }}>
              Legal & Compliance
            </ListSubheader>
            <ListItem>
              <ListItemButton>Terms & Conditions</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Privacy Policy</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Disclaimer</ListItemButton>
            </ListItem>
          </List>

          {/* Support */}
          <List
            size="md"
            orientation="vertical"
            sx={{
              "--ListItem-radius": "8px",
              color: "white",
              textAlign: "left",
            }}
          >
            <ListSubheader sx={{ fontWeight: "bold", color: "white" }}>
              Support
            </ListSubheader>
            <ListItem>
              <ListItemButton>FAQs</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Help Center</ListItemButton>
            </ListItem>
          </List>

          {/* Resources */}
          <List
            size="md"
            orientation="vertical"
            sx={{
              "--ListItem-radius": "8px",
              color: "white",
              textAlign: "left",
            }}
          >
            <ListSubheader sx={{ fontWeight: "bold", color: "white" }}>
              Resources
            </ListSubheader>
            <ListItem>
              <ListItemButton>Market Updates</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Reports & Insights</ListItemButton>
            </ListItem>
          </List>

          {/* Company */}
          <List
            size="md"
            orientation="vertical"
            sx={{
              "--ListItem-radius": "8px",
              color: "white",
              textAlign: "left",
            }}
          >
            <ListSubheader sx={{ fontWeight: "bold", color: "white" }}>
              Company
            </ListSubheader>
            <ListItem>
              <ListItemButton>Careers</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Investor Relations</ListItemButton>
            </ListItem>
          </List>

          {/* Social Media */}
          <List
            size="md"
            orientation="vertical"
            sx={{
              "--ListItem-radius": "8px",
              color: "white",
              textAlign: "left",
            }}
          >
            <ListSubheader sx={{ fontWeight: "bold", color: "white" }}>
              Follow Us
            </ListSubheader>
            <ListItem>
              <ListItemButton>LinkedIn</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Twitter</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Facebook</ListItemButton>
            </ListItem>
          </List>

          {/* Contact Information */}
          <List
            size="md"
            orientation="vertical"
            sx={{
              "--ListItem-radius": "8px",
              color: "white",
              textAlign: "left",
            }}
          >
            <ListSubheader sx={{ fontWeight: "bold", color: "white" }}>
              Contact Us
            </ListSubheader>
            <ListItem>
              <Typography>Address: 123 Financial Street</Typography>
            </ListItem>
            <ListItem>
              <Typography>Email: support@financial.com</Typography>
            </ListItem>
            <ListItem>
              <Typography>Phone: +1-234-567-890</Typography>
            </ListItem>
          </List>
        </Box>
        <Divider sx={{ my: 2, bgcolor: "gray" }} />
        <Typography sx={{ fontSize: "16px", color: "white" }}>
          Copyright © 2024 Suvicorp
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "white" }}>
        Developed by{" "}
          <Link
            to="https://github.com/devashish2006"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4caf50", textDecoration: "none" }}
          >
            Devashish
          </Link>
        </Typography>
      </Box>
    </Sheet>
  );
}
