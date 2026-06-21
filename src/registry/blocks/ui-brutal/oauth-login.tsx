import * as React from "react";
import { XIcon } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui-brutal/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui-brutal/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui-brutal/dialog";
import { cn } from "@/lib/utils";

export type OAuthLoginTranslateValues = Record<string, string | number>;

export type OAuthLoginTranslate = (
  key: string,
  fallback: string,
  values?: OAuthLoginTranslateValues,
) => string;

export type OAuthLoginProvider<TProviderId extends string = string> = {
  id: TProviderId;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  disabled?: boolean;
  metadata?: Record<string, unknown>;
};

export type OAuthLoginSignInEvent = {
  preventDefault: () => void;
  readonly defaultPrevented: boolean;
};

type OAuthLoginSharedProps<TProviderId extends string = string> = {
  providers?: readonly OAuthLoginProvider<TProviderId>[];
  title?: string | null;
  description?: string | null;
  showHeader?: boolean;
  footer?: React.ReactNode;
  emptyState?: React.ReactNode;
  error?: string | null;
  pendingProviderId?: TProviderId | null;
  onProviderSignIn?: (
    provider: OAuthLoginProvider<TProviderId>,
    event: OAuthLoginSignInEvent,
  ) => void | Promise<void>;
  t?: OAuthLoginTranslate;
};

export type OAuthLoginContentProps<TProviderId extends string = string> =
  OAuthLoginSharedProps<TProviderId> &
    Omit<React.ComponentPropsWithoutRef<"div">, "children" | "title">;

export type OAuthLoginCardProps<TProviderId extends string = string> =
  OAuthLoginSharedProps<TProviderId> &
    Omit<React.ComponentPropsWithoutRef<typeof Card>, "children" | "title"> & {
      contentClassName?: string;
    };

export type OAuthLoginDialogProps<TProviderId extends string = string> =
  OAuthLoginSharedProps<TProviderId> &
    Omit<React.ComponentPropsWithoutRef<typeof Dialog>, "children"> & {
      trigger?: React.ReactNode;
      triggerClassName?: string;
      className?: string;
      contentClassName?: string;
    };

const DEFAULT_OAUTH_LOGIN_PROVIDERS: readonly OAuthLoginProvider[] = [
  {
    id: "google",
    label: "Google",
  },
];

function OAuthLoginContent<TProviderId extends string = string>({
  className,
  providers = DEFAULT_OAUTH_LOGIN_PROVIDERS as readonly OAuthLoginProvider<TProviderId>[],
  title,
  description,
  showHeader = true,
  footer = null,
  emptyState = null,
  error,
  pendingProviderId,
  onProviderSignIn,
  t,
  ...props
}: OAuthLoginContentProps<TProviderId>) {
  const [internalPendingProviderId, setInternalPendingProviderId] =
    React.useState<TProviderId | null>(null);
  const resolvedPendingProviderId =
    pendingProviderId === undefined
      ? internalPendingProviderId
      : pendingProviderId;
  const isInteractionLocked = resolvedPendingProviderId != null;
  const copy = getOAuthLoginCopy({ description, t, title });

  const handleProviderSignIn = React.useCallback(
    (
      provider: OAuthLoginProvider<TProviderId>,
      event:
        | React.MouseEvent<HTMLButtonElement>
        | React.MouseEvent<HTMLAnchorElement>,
    ) => {
      if (provider.disabled || isInteractionLocked) {
        event.preventDefault();
        return;
      }

      const signInEvent = createSignInEvent(event);
      const result = onProviderSignIn?.(provider, signInEvent);

      if (!isPromiseLike(result) || pendingProviderId !== undefined) {
        return;
      }

      setInternalPendingProviderId(provider.id);
      void Promise.resolve(result)
        .finally(() => {
          setInternalPendingProviderId((currentProviderId) =>
            currentProviderId === provider.id ? null : currentProviderId,
          );
        })
        .catch(() => undefined);
    },
    [isInteractionLocked, onProviderSignIn, pendingProviderId],
  );

  return (
    <div
      data-slot="oauth-login-content"
      className={cn("grid w-full gap-5", className)}
      {...props}
    >
      {showHeader && copy.title ? (
        <div className="grid gap-2 text-center">
          <h2 className="text-2xl leading-none font-semibold tracking-normal">
            {copy.title}
          </h2>
          {copy.description ? (
            <p className="text-muted-foreground text-sm leading-6">
              {copy.description}
            </p>
          ) : null}
        </div>
      ) : null}

      <div data-slot="oauth-login-provider-list" className="grid gap-3">
        {providers.length > 0
          ? providers.map((provider) => {
              const providerLabel = translate(
                t,
                `oauthLogin.provider.${provider.id}`,
                provider.label,
              );
              const isProviderPending =
                resolvedPendingProviderId === provider.id;
              const buttonLabel = isProviderPending
                ? translate(
                    t,
                    "oauthLogin.continuingWith",
                    "Continuing with {provider}",
                    { provider: providerLabel },
                  )
                : translate(
                    t,
                    "oauthLogin.continueWith",
                    "Continue with {provider}",
                    {
                      provider: providerLabel,
                    },
                  );
              const isDisabled = provider.disabled || isInteractionLocked;
              const buttonContent = (
                <>
                  <ProviderIcon
                    icon={provider.icon}
                    providerLabel={providerLabel}
                  />
                  <span className="min-w-0 truncate">{buttonLabel}</span>
                </>
              );

              if (provider.href && !isDisabled) {
                return (
                  <a
                    key={provider.id}
                    href={provider.href}
                    target={provider.target}
                    rel={provider.rel}
                    aria-label={buttonLabel}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-full justify-start gap-3",
                    )}
                    onClick={(event) => handleProviderSignIn(provider, event)}
                  >
                    {buttonContent}
                  </a>
                );
              }

              return (
                <Button
                  key={provider.id}
                  type="button"
                  variant="outline"
                  className="w-full justify-start gap-3"
                  disabled={isDisabled}
                  aria-label={buttonLabel}
                  aria-busy={isProviderPending || undefined}
                  onClick={(event) => handleProviderSignIn(provider, event)}
                >
                  {buttonContent}
                </Button>
              );
            })
          : emptyState}
      </div>

      {error ? (
        <p
          data-slot="oauth-login-error"
          role="alert"
          className="text-destructive text-sm font-medium"
        >
          {error}
        </p>
      ) : null}

      {footer ? (
        <div
          data-slot="oauth-login-footer"
          className="text-muted-foreground [&_a:hover]:text-foreground text-center text-xs leading-5 [&_a]:underline [&_a]:underline-offset-4"
        >
          {footer}
        </div>
      ) : null}
    </div>
  );
}

function OAuthLoginCard<TProviderId extends string = string>({
  className,
  contentClassName,
  providers,
  title,
  description,
  showHeader = true,
  footer,
  emptyState,
  error,
  pendingProviderId,
  onProviderSignIn,
  t,
  ...cardProps
}: OAuthLoginCardProps<TProviderId>) {
  const copy = getOAuthLoginCopy({ description, t, title });

  return (
    <Card
      {...cardProps}
      data-slot="oauth-login-card"
      className={cn("w-full max-w-sm", className)}
    >
      {showHeader && copy.title ? (
        <CardHeader className="text-center">
          <CardTitle>{copy.title}</CardTitle>
          {copy.description ? (
            <CardDescription>{copy.description}</CardDescription>
          ) : null}
        </CardHeader>
      ) : null}
      <CardContent className={showHeader && copy.title ? undefined : "pt-6"}>
        <OAuthLoginContent
          providers={providers}
          footer={footer}
          emptyState={emptyState}
          error={error}
          pendingProviderId={pendingProviderId}
          onProviderSignIn={onProviderSignIn}
          t={t}
          title={title}
          description={description}
          showHeader={false}
          className={contentClassName}
        />
      </CardContent>
    </Card>
  );
}

function OAuthLoginDialog<TProviderId extends string = string>({
  trigger,
  triggerClassName,
  className,
  contentClassName,
  providers,
  title,
  description,
  showHeader = true,
  footer,
  emptyState,
  error,
  pendingProviderId,
  onProviderSignIn,
  t,
  ...dialogProps
}: OAuthLoginDialogProps<TProviderId>) {
  const copy = getOAuthLoginCopy({ description, t, title });
  const triggerLabel = translate(t, "oauthLogin.trigger", "Sign in");
  const closeLabel = translate(t, "oauthLogin.dialog.close", "Close");

  return (
    <Dialog {...dialogProps}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button type="button" className={triggerClassName}>
            {triggerLabel}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className={cn("sm:max-w-sm", className)}
      >
        <DialogClose asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="absolute top-2 right-2"
          >
            <XIcon />
            <span className="sr-only">{closeLabel}</span>
          </Button>
        </DialogClose>
        {showHeader && copy.title ? (
          <DialogHeader className="pr-8 text-center">
            <DialogTitle>{copy.title}</DialogTitle>
            {copy.description ? (
              <DialogDescription>{copy.description}</DialogDescription>
            ) : null}
          </DialogHeader>
        ) : null}
        <OAuthLoginContent
          providers={providers}
          footer={footer}
          emptyState={emptyState}
          error={error}
          pendingProviderId={pendingProviderId}
          onProviderSignIn={onProviderSignIn}
          t={t}
          title={title}
          description={description}
          showHeader={false}
          className={contentClassName}
        />
      </DialogContent>
    </Dialog>
  );
}

function ProviderIcon({
  icon,
  providerLabel,
}: {
  icon?: React.ReactNode;
  providerLabel: string;
}) {
  if (icon) {
    return (
      <span
        aria-hidden="true"
        className="flex size-5 shrink-0 items-center justify-center"
      >
        {icon}
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="bg-muted text-muted-foreground flex size-5 shrink-0 items-center justify-center rounded-sm border text-xs font-bold"
    >
      {getProviderInitial(providerLabel)}
    </span>
  );
}

function getOAuthLoginCopy({
  description,
  t,
  title,
}: Pick<OAuthLoginSharedProps, "description" | "t" | "title">) {
  return {
    title:
      title === null
        ? null
        : translate(t, "oauthLogin.title", title ?? "Sign in"),
    description:
      description == null || description === ""
        ? null
        : translate(t, "oauthLogin.description", description),
  };
}

function translate(
  t: OAuthLoginTranslate | undefined,
  key: string,
  fallback: string,
  values?: OAuthLoginTranslateValues,
) {
  return interpolate(t?.(key, fallback, values) ?? fallback, values);
}

function interpolate(
  value: string,
  values: OAuthLoginTranslateValues | undefined,
) {
  if (!values) {
    return value;
  }

  return value.replace(/\{(\w+)\}/g, (match, key) =>
    key in values ? String(values[key]) : match,
  );
}

function createSignInEvent(
  event:
    | React.MouseEvent<HTMLButtonElement>
    | React.MouseEvent<HTMLAnchorElement>,
): OAuthLoginSignInEvent {
  return {
    preventDefault: () => event.preventDefault(),
    get defaultPrevented() {
      return event.defaultPrevented;
    },
  };
}

function isPromiseLike(value: unknown): value is PromiseLike<unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    "then" in value &&
    typeof (value as { then?: unknown }).then === "function"
  );
}

function getProviderInitial(providerLabel: string) {
  return providerLabel.trim().charAt(0).toUpperCase() || "?";
}

export { OAuthLoginCard, OAuthLoginContent, OAuthLoginDialog };
