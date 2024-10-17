import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Link from "next/link";

function PopUp() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        // onMouseOver={() => {
        //   setOpen(!open);
        // }}
      >
        Open Popup
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Website's Title</DialogTitle>
        <DialogContent>
          {/* You can put any content here */}
          <p>Explaination for website</p>
          <Link
            onClick={handleClose}
            href={""}
            className="text-blue-500 hover:text-blue-800"
          >
            Visit The Website
          </Link>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PopUp;
