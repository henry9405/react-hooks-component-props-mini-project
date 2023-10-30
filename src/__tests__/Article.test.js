import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

describe("Article Component", () => {
  test("renders an <article> element", () => {
    const { container } = render(
      <Article
        title="Components 101"
        date="December 15, 2020"
        preview="Setting up the building blocks of your site"
      />
    );
    expect(container.querySelector("article")).toBeInTheDocument();
  });

  test("renders a <small> with the date of the post", () => {
    render(
      <Article
        title="Components 101"
        date="December 15, 2020"
        preview="Setting up the building blocks of your site"
      />
    );
    const small = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === 'small' &&
        content.includes('December 15, 2020')
      );
    });
    expect(small).toBeInTheDocument();
    expect(small.tagName).toBe("SMALL");
  });
  
  test("uses a default value for the date if no date is passed as a prop", () => {
    render(
      <Article
        title="Components 101"
        preview="Setting up the building blocks of your site"
      />
    );
    const defaultDate = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === 'small' &&
        content.includes('January 1, 1970')
      );
    });
    expect(defaultDate).toBeInTheDocument();
    expect(defaultDate.tagName).toBe("SMALL");
  });
});
