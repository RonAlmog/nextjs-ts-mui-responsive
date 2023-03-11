import Nav from "@/components/layout/Nav";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
}
