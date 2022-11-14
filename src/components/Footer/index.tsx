import { useGetParticipantsList } from "../../states/hooks/useGetParticipantsList";

export default function Footer() {
  const participants = useGetParticipantsList();
  return (
    <footer>
      <button disabled={participants.length < 3}>Iniciar brincadeira</button>
    </footer>
  );
}
