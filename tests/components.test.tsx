import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";

import { Button } from "@/components/ui-brutal/button";
import { Calendar } from "@/components/ui-brutal/calendar";
import { Checkbox } from "@/components/ui-brutal/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui-brutal/dialog";
import { Input } from "@/components/ui-brutal/input";

test("disabled buttons do not invoke their click handler", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  render(
    <Button disabled onClick={onClick}>
      Save
    </Button>,
  );

  await user.click(screen.getByRole("button", { name: "Save" }));

  expect(onClick).not.toHaveBeenCalled();
});

test("asChild buttons preserve link props, refs, and event handlers", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn((event: React.MouseEvent) => event.preventDefault());
  const ref = React.createRef<HTMLAnchorElement>();
  render(
    <Button asChild nativeButton={false} onClick={onClick}>
      <a ref={ref} href="/docs">
        Documentation
      </a>
    </Button>,
  );

  const link = screen.getByRole("button", { name: "Documentation" });
  expect(link.tagName).toBe("A");
  expect(link).toHaveAttribute("href", "/docs");
  expect(ref.current).toBe(link);
  await user.click(link);
  expect(onClick).toHaveBeenCalledOnce();
});

test("checkboxes support mouse and keyboard changes", async () => {
  const user = userEvent.setup();
  const onCheckedChange = vi.fn();
  render(
    <Checkbox aria-label="Receive updates" onCheckedChange={onCheckedChange} />,
  );
  const checkbox = screen.getByRole("checkbox", { name: "Receive updates" });

  await user.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(onCheckedChange.mock.calls[0][0]).toBe(true);

  await user.keyboard(" ");
  expect(checkbox).not.toBeChecked();
  expect(onCheckedChange.mock.calls[1][0]).toBe(false);
});

test("dialogs compose with buttons and restore focus after closing", async () => {
  const user = userEvent.setup();
  render(
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Profile</DialogTitle>
        <DialogDescription>Update your name.</DialogDescription>
        <Input aria-label="Name" defaultValue="Oat" />
      </DialogContent>
    </Dialog>,
  );
  const trigger = screen.getByRole("button", { name: "Edit profile" });

  await user.click(trigger);
  expect(await screen.findByRole("dialog", { name: "Profile" })).toBeVisible();
  await waitFor(() =>
    expect(screen.getByRole("textbox", { name: "Name" })).toHaveFocus(),
  );
  await user.click(screen.getByRole("button", { name: "Close" }));
  await waitFor(() =>
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
  );
  await waitFor(() => expect(trigger).toHaveFocus());

  await user.click(trigger);
  await screen.findByRole("dialog");
  await user.keyboard("{Escape}");
  await waitFor(() =>
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
  );
  await waitFor(() => expect(trigger).toHaveFocus());
});

test("the calendar selects dates and navigates to the next month", async () => {
  const user = userEvent.setup();
  function DatePicker() {
    const [selected, setSelected] = React.useState<Date>();
    return (
      <Calendar
        mode="single"
        defaultMonth={new Date(2026, 0, 1)}
        selected={selected}
        onSelect={setSelected}
      />
    );
  }
  render(<DatePicker />);

  const day = screen.getByRole("button", { name: /January 15/ });
  await user.click(day);
  expect(screen.getByRole("button", { name: /January 15/ })).toHaveAttribute(
    "data-selected-single",
    "true",
  );
  await user.click(screen.getByRole("button", { name: /next month/i }));
  expect(screen.getByText("February 2026")).toBeVisible();
});
