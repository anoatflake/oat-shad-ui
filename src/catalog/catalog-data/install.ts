const RAW_REGISTRY_BASE_URL =
  "https://raw.githubusercontent.com/anoatflake/oat-shad-ui/main/public/r";

export function getInstallCommand(name: string) {
  return `npx shadcn@latest add "${RAW_REGISTRY_BASE_URL}/${name}.json"`;
}
