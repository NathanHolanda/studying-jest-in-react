import { atom } from "recoil";

export const participantsRecoilState = atom<string[]>({
  key: "participantsRecoilState",
  default: [],
});

export const errorMessageRecoilState = atom<string>({
  key: "errorMessageRecoilState",
  default: "",
});
