import * as React from "react";

import {
  OAuthLoginCard,
  OAuthLoginDialog,
  type OAuthLoginProvider,
} from "@/blocks/ui-brutal/oauth-login";

const previewProviders: OAuthLoginProvider[] = [
  {
    id: "google",
    label: "Google",
  },
  {
    id: "github",
    label: "GitHub",
    href: "#github",
  },
];

const OAuthLoginPreview = () => {
  const [lastProvider, setLastProvider] = React.useState<string | null>(null);

  async function handleProviderSignIn(
    provider: OAuthLoginProvider,
    event: { preventDefault: () => void },
  ) {
    event.preventDefault();
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    setLastProvider(provider.label);
  }

  return (
    <div className="grid w-full max-w-5xl gap-8 p-4 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)]">
      <OAuthLoginCard
        providers={previewProviders}
        onProviderSignIn={handleProviderSignIn}
      />

      <div className="flex min-h-72 flex-col items-start justify-center gap-4 rounded-md border p-6">
        <OAuthLoginDialog onProviderSignIn={handleProviderSignIn} />
        <div className="text-muted-foreground text-sm">
          {lastProvider
            ? `Selected provider: ${lastProvider}`
            : "No provider selected"}
        </div>
      </div>
    </div>
  );
};

export default OAuthLoginPreview;
