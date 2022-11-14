import { useGetParticipantsList } from "../../states/hooks/useGetParticipantsList";

export default function ParticipantsList() {
  const participants = useGetParticipantsList();

  return (
    <ul>
      {participants.map((participant) => (
        <li key={participant}>{participant}</li>
      ))}
    </ul>
  );
}
