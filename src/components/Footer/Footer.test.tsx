import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from ".";
import { useGetParticipantsList } from "../../states/hooks/useGetParticipantsList";

jest.mock("../../states/hooks/useGetParticipantsList", () => ({
  useGetParticipantsList: jest.fn(),
}));
describe("when participants list has less than 3 items", () => {
  const participants = ["Carlos", "Eugênia"];
  beforeEach(() =>
    (useGetParticipantsList as jest.Mock).mockReturnValue(participants)
  );

  test("footer button should be disabled", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });
});
