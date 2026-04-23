import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40 py-10">
      <div className="container grid gap-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg tracking-wide">PHOTOGRAPH</p>
          <p className="mt-2 text-sm text-muted">Creative production agency for photo, video and post-production.</p>
        </div>
        <div className="space-y-2 text-sm text-muted">
          <Link href="/privacy-policy" className="block hover:text-foreground">Privacy Policy</Link>
          <Link href="/terms-of-use" className="block hover:text-foreground">Terms of Use</Link>
          <Link href="/cookie-policy" className="block hover:text-foreground">Cookie Policy</Link>
          <Link href="/equipment-terms" className="block hover:text-foreground">Equipment Terms</Link>
        </div>
        <p className="text-sm text-muted md:text-right">© {new Date().getFullYear()} Photograph Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}
