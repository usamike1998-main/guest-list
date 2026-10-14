import GuestList from "./GuestList";
import GuestDetails from "./GuestDetails";
import { useGuest } from "./GuestContext";

export default function App() {
  const { selectedGuest } = useGuest();

  return (
    <>
      <h1>Guest list</h1>
      {selectedGuest ? (
        <GuestDetails selectedGuest={selectedGuest} />
      ) : (
        <GuestList />
      )}
    </>
  );
}
