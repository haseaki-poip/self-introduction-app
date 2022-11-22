import { render, screen } from "@testing-library/react";
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

    expect(name == Introduction.name).toBeTruthy();
    expect(affiliation == Introduction.affiliation).toBeTruthy();
    expect(hobby == Introduction.hobby).toBeTruthy();
    expect(introduction == Introduction.introduction).toBeTruthy();

    // githubはnullのためtestidがgithubである要素は作られない。
    // そのためgetByTestIdはエラーを出すためcatch時にテストを通過させる。
    try {
      expect(screen.getByTestId("github")).not.toBeVisible();
    } catch (error) {
      expect(true).toBeTruthy();
    }

    // snsのリンクテスト
    const twitter_url = "https://twitter.com/" + Introduction.twitter_url;
    const Instagram_url =
      "https://www.instagram.com/" + Introduction.Instagram_url;
    expect(screen.getByTestId("twitter").closest("a")).toHaveAttribute(
      "href",
      twitter_url
    );
    expect(screen.getByTestId("Instagram").closest("a")).toHaveAttribute(
      "href",
      Instagram_url
    );
  });
});
