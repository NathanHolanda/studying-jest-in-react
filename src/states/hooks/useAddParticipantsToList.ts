import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorMessageRecoilState, participantsRecoilState } from "../atom";

export const useAddParticipantsToList = () => {
  const participants = useRecoilValue(participantsRecoilState);
  const setParticipants = useSetRecoilState(participantsRecoilState);

  const setErrorMessage = useSetRecoilState(errorMessageRecoilState);

  return (participant: string) => {
    const participantExists = participants.includes(participant);

    if (participantExists) {
      setErrorMessage("Nomes duplicados não são permitidos!");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    return setParticipants((participants) => [...participants, participant]);
  };
};
