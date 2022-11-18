import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IntroductionCard from "../Card/IntroductionCard";

const Introduction = {
  name: "test 太郎",
  affiliation: "test株式会社",
  introduction: "Hello World!",
  hobby: "プログラミング",
  img_url: null,
  twitter_url: "twitter-test",
  Instagram_url: "Instagram-test",
  github_url: null,
};

describe("Test Introduction Card", () => {
  test("show Introduction Card", async () => {
    render(<IntroductionCard Introduction={Introduction} />);

    const name = screen.getByTestId("name").textContent;
    const affiliation = screen.getByTestId("affiliation").textContent;
    const hobby = screen.getByTestId("hobby").textContent;
    const introduction = screen.getByTestId("introduction").textContent;
    const twitter = screen.getByTestId("twitter").textContent;
    const Instagram = screen.getByTestId("Instagram").textContent;
    //const github = screen.getByTestId("github").textContent;

    expect(name == Introduction.name).toBeTruthy();
    expect(affiliation == Introduction.affiliation).toBeTruthy();
    expect(hobby == Introduction.hobby).toBeTruthy();
    expect(introduction == Introduction.introduction).toBeTruthy();
  });
});
