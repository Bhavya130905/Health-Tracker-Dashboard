import WelcomeCard from "./WelcomeCard";
import QuoteCard from "./QuoteCard";

function DashboardHeader() {
  return (
    <section className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <WelcomeCard />
      </div>

      <QuoteCard />
    </section>
  );
}

export default DashboardHeader;