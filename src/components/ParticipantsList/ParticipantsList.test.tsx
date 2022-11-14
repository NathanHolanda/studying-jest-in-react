import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ParticipantsList from ".";
import { useGetParticipantsList } from "../../states/hooks/useGetParticipantsList";

jest.mock("../../states/hooks/useGetParticipantsList", () => ({
  useGetParticipantsList: jest.fn(),
}));

describe("when participants list is empty", () => {
  beforeEach(() => (useGetParticipantsList as jest.Mock).mockReturnValue([]));
  test("ParticipantsList should be rendered with no values", () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const participantsList = screen.queryAllByRole("listitem");

    expect(participantsList).toHaveLength(0);
  });
});

describe("when participants list is filled", () => {
  const participants = ["João", "Ana"];
  beforeEach(() =>
    (useGetParticipantsList as jest.Mock).mockReturnValue(participants)
  );
  test("ParticipantsList should be rendered with values", () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const participantsList = screen.queryAllByRole("listitem");

    expect(participantsList).toHaveLength(2);
  });
});
