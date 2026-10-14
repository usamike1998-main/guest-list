import { useGuest } from "./GuestContext";
import GuestItem from "./GuestItem";

export default function GuestList({}) {
  const { guests } = useGuest();
  if (!guests) return <p>Guests are loading</p>;
  return (
    <>
      <h1>Guest List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest, i) => (
            <GuestItem key={i} guest={guest} />
          ))}
        </tbody>
      </table>
      <p>Select a guest to see more details.</p>
    </>
  );
}
