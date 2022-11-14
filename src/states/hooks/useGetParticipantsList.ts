import { useRecoilValue } from "recoil";
import { participantsRecoilState } from "../atom";

export const useGetParticipantsList = () =>
  useRecoilValue(participantsRecoilState);
