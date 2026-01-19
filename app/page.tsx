import { redirect } from "next/navigation";

const Home = () => {
  return <div>{redirect("/office/dashboard")}</div>;
};

export default Home;
