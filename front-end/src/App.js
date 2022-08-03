import AOS from 'aos';
import 'aos/dist/aos.css';
import UserRoutes from "./pages/UserRoutes";

const App = () => {
  AOS.init({
    startEvent: 'DOMContentLoaded',
    offset: 50,
    duration: 1000,
    disable: false,
    delay: 250,
    once: false,
    mirror: true,
    easing: 'ease-in-out'
  });

  return (
    <div className="scroll-smooth overflow-hidden">
      <UserRoutes />
    </div>
  );
}

export default App;
