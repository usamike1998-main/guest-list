import { useGuest } from "./GuestContext";

export default function GuestDetails() {
  const { selectedGuest, deleteSelectedGuest } = useGuest();

  const { job, bio, email, phone, name } = selectedGuest;
  return (
    <article className="guest-details">
      <h1>{name}</h1>
      <address>
        {email}
        <br />
        {phone}
      </address>
      <p>{job}</p>
      <p>{bio}</p>
      <button onClick={() => deleteSelectedGuest(null)}>Back</button>
    </article>
  );
}
