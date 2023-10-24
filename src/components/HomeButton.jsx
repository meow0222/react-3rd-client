import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';



export default function HomeButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="dashboard"
    >
      新規登録
    </Button>
  );
}