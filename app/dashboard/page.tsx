import { LogoutButton } from "@/app/components/custom/logout-button";
export default function DashboardRoute() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-8xl">Hello Friend!</h1>
      <h3 className="text-5xl py-5">This is the Dashboard</h3>
      <LogoutButton />
    </div>
  );
}
