import GuestList from "./GuestList";
import GuestDetails from "./GuestDetails";
import { useGuest } from "./GuestContext";

export default function App() {
  const { selectedGuest } = useGuest();

  return <main>{selectedGuest ? <GuestDetails /> : <GuestList />}</main>;
}
