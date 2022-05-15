import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Paper
          sx={{
            height: "300px",
            p: 2
          }}
        >
          <Typography
            color="text.primary"
            variant="h5"
            component="h1"
            gutterBottom
          >
            Button Override Theme Example
          </Typography>
          <Stack justifyContent="space-between">
            <Divider sx={{ my: 2 }} />
            <Stack sx={{ mt: 2 }} direction="row" spacing={1}>
              <Button variant="contained" color="primary">
                Primary
              </Button>
              <Button variant="contained" color="secondary">
                Secondary
              </Button>
              <Button variant="contained" color="tertiary">
                Tertiary
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}
