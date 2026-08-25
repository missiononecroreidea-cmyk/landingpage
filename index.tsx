import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, ArrowUpRight, Download, MessageCircle } from "lucide-react";
import badge from "@/assets/tehelka-badge.png";

const WHATSAPP_LINK = "https://wa.link/iwa7wp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TEHELKA007 Official | WhatsApp" },
      { name: "description", content: "Chat with TEHELKA007 Official on WhatsApp. Click to continue the conversation." },
      { property: "og:title", content: "TEHELKA007 Official | WhatsApp" },
      { property: "og:description", content: "Chat with TEHELKA007 Official on WhatsApp. Click to continue the conversation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function WhatsAppLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.588 5.931L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <WhatsAppLogo className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold tracking-tight text-foreground">
              WhatsApp
            </span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <button className="group inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary">
              Features
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Privacy
            </a>
            <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Blog
            </a>
            <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Apps
            </a>
            <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary">
              Help Center
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary">
              For Business
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden items-center gap-1 rounded-full border border-input px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent sm:inline-flex"
            >
              Log In
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Download
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-md flex-col items-center text-center">
          {/* Profile badge */}
          <div className="relative">
            <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-gold shadow-xl sm:h-32 sm:w-32">
              <img
                src={badge}
                alt="TEHELKA007 Official profile badge"
                width={512}
                height={512}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            TEHELKA007 <span className="font-normal text-muted-foreground">Official</span>
          </h1>

          {/* Message bubble */}
          <div className="mt-8 w-full rounded-2xl bg-muted px-6 py-5 text-center shadow-sm">
            <p className="text-base font-medium text-foreground sm:text-lg">
              Hi Sir I Want To Know More about Tehelka007
            </p>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex w-full flex-col gap-3">
            <a
              href={WHATSAPP_LINK}
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Open app
            </a>
            <a
              href={WHATSAPP_LINK}
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-foreground bg-transparent px-6 text-base font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Continue to WhatsApp Web
            </a>
          </div>

          {/* Footer note */}
          <a
            href={WHATSAPP_LINK}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <WhatsAppLogo className="h-5 w-5 text-primary" />
            Don&apos;t have the app?
            <span className="text-primary underline underline-offset-2">Download it now</span>
          </a>
        </div>
      </main>
    </div>
  );
}
