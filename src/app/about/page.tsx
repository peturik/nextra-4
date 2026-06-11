import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About page.",
};
export default function About() {
  return (
    <div className="container flex items-center justify-center">
      <h1
        style={{
          textAlign: "center",
          fontSize: 64,
          margin: "25vh 0",
          fontWeight: "bold",
        }}
      >
        About page
      </h1>
    </div>
  );
}
