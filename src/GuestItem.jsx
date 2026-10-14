import { useGuest } from "./GuestContext";

export default function GuestItem({ guest }) {
  const { getGuest } = useGuest();
  const { id, name, email, phone } = guest;
  const htmlGuest = (
    <tr key={id} onClick={() => getGuest(id)}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );

  return htmlGuest;
}
