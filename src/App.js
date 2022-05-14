import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Paper
          sx={{
            bgcolor: "background.header",
            minHeight: 300,
            p: 2
          }}
        >
          <Typography
            color="text.inverse"
            variant="h1"
            component="h3"
            gutterBottom
          >
            Create React App example
          </Typography>
          <Divider sx={{ bgcolor: "grey.400" }} />
        </Paper>
      </Box>
    </Container>
  );
}
