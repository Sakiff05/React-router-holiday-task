import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-[100vh] flex items-center justify-center ">
      <p className="text-center text-rose-500 text-5xl">WELCOME ADMIN !</p>
    </div>
  );
}

export default Dashboard;
