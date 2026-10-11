<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

## Website architecture

- Keep the imported content pages and shared WebsiteLayout except explicit user corrections; the supplied source defines the website experience.
- Retain the root index.html byte-for-byte as supplied while TanStack routes run the website; the supported runtime does not use a legacy HTML entry point.
- Resolve page, logo, and font assets directly to absolute public CDN URLs from the imported asset manifest; external hosts do not provide Lovable-relative proxies or the app's media redirects.
- Build with Nitro preset "netlify" and renderer disabled for external hosting; otherwise Nitro serves the legacy root index.html as every page and the site is blank.
- Keep scroll entrances in the shared website-motion enhancement with content visible by default and late-mounted elements observed; animation registration must never determine content availability.
