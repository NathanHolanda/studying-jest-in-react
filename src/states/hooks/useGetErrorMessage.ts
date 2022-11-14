import { useRecoilValue } from "recoil";
import { errorMessageRecoilState } from "../atom";

export const useGetErrorMessage = () => {
  const message = useRecoilValue(errorMessageRecoilState);

  return message;
};
