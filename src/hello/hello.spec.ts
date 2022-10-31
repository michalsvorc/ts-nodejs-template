import { describe, expect, it } from "vitest";
import { hello } from "./hello.js";

describe("Hello service", () => {
  it("should prepend greeting message to a text.", () => {
    expect(hello("World")).toBe("Hello World.");
  });
});
