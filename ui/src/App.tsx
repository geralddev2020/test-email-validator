import Header from "@/components/header/Header";
import UserCheckForm from "@/components/usercheck/UserCheckForm";

function App() {
  return (
    <div className="py-8">
    {/**
     * @todo
     * This can be a generic layout - out of scope for now
     */}
      <div className="w-full sm:max-w-md mx-auto shadow-sm bg-white p-6">
        <Header />
        <UserCheckForm />
      </div>
    </div>
  );
}

export default App;
