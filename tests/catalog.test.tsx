import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

import App from "@catalog/App";

test("catalog search handles no matches and filters installable themes", async () => {
  const user = userEvent.setup();
  render(<App />);
  const search = screen.getByRole("textbox", { name: "Search catalog" });

  await user.type(search, "no-such-component");
  expect(screen.getByText("No catalog items matched.")).toBeVisible();
  expect(screen.getByText("No preview selected.")).toBeVisible();

  await user.clear(search);
  await user.click(screen.getByRole("button", { name: "Themes" }));
  expect(screen.getByRole("heading", { name: "Oat Theme" })).toBeVisible();
  expect(screen.getByText("1 visible")).toBeVisible();
  await user.click(screen.getByRole("button", { name: "Install" }));
  expect(await navigator.clipboard.readText()).toBe(
    'npx shadcn@latest add "https://raw.githubusercontent.com/anoatflake/oat-shad-ui/main/public/r/oat-theme.json"',
  );
});

test("the catalog loads and opens a real component preview", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(
    screen.getByRole("textbox", { name: "Search catalog" }),
    "dialog",
  );
  await user.click(screen.getByRole("button", { name: /^Dialog / }));
  await user.click(
    await screen.findByRole("button", { name: "Color: default" }),
  );

  expect(
    await screen.findByRole("dialog", { name: "Edit profile" }),
  ).toBeVisible();
  expect(screen.getByRole("textbox", { name: "Name" })).toHaveValue(
    "Pedro Duarte",
  );
});

test("theme changes persist across catalog remounts", async () => {
  const user = userEvent.setup();
  const { unmount } = render(<App />);
  expect(document.documentElement).toHaveClass("dark");

  await user.click(screen.getByRole("button", { name: "Toggle theme" }));
  expect(document.documentElement).toHaveClass("light");
  expect(localStorage.getItem("oat-shad-ui-theme")).toBe("light");

  unmount();
  render(<App />);
  await waitFor(() => expect(document.documentElement).toHaveClass("light"));
});
