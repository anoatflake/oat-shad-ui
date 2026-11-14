import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const registry = JSON.parse(
  await readFile(new URL("../registry.json", import.meta.url), "utf8"),
);

for (const item of registry.items) {
  test(`built registry item ${item.name} preserves metadata and installable source`, async () => {
    const built = JSON.parse(
      await readFile(
        new URL(`../public/r/${item.name}.json`, import.meta.url),
        "utf8",
      ),
    );
    const { files, ...metadata } = item;
    for (const [key, value] of Object.entries(metadata)) {
      assert.deepEqual(built[key], value, `${item.name}: ${key}`);
    }
    assert.equal(built.files?.length ?? 0, files?.length ?? 0);
    for (const [index, file] of (files ?? []).entries()) {
      const { content, ...builtFile } = built.files[index];
      assert.deepEqual(builtFile, file);
      assert.equal(
        content,
        await readFile(new URL(`../${file.path}`, import.meta.url), "utf8"),
      );
    }
  });
}
