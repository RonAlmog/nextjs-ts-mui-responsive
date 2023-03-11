import Nav from "@/components/layout/Nav";
import { Box } from "@mui/material";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Nav />
      <Box display="flex" minHeight="100vh" sx={{ mt: 3 }}>
        {children}
      </Box>

      <Footer />
    </>
  );
}
