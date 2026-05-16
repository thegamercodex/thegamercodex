---
title: Windrose Mod Manager (CertiFried) vs Vercadi Mod Manager — which manager to pick
description: Short comparison between the two community-built mod managers for Windrose. Closed-source feature-complete vs open-source reduced scope, remote dedicated server support vs client-only.
---

Just under a month after Early Access launch, Windrose's community already has two distinct mod managers. **Windrose Mod Manager (CertiFried)** is hosted on Nexus, closed source, with support for client, local server, and remote dedicated server via SFTP/FTP. **Vercadi Mod Manager** is open source on GitHub, with scope deliberately reduced to client and local server.

## Scope philosophy

CertiFried aims to cover every possible target. If your setup is complex — client + dedicated server hosted on g-portal + local testing — a single manager handles them all. The tradeoff is inherent complexity: more features, more UI, more onboarding.

Vercadi declares its scope clearly: client install + local server. If you need anything outside that (remote SFTP, dependency resolution), it deliberately doesn't have it. Tradeoff: simplicity and auditable code, but limited features.

## Open source vs closed source

Vercadi lives at `github.com/Vercadi/windrose-mod-manager`. Anyone can read the code before running it, fork to customize features, open issues or PRs. For players who care about auditability — especially because the manager has filesystem and network access — this matters.

CertiFried distributes binaries from Nexus. There's no public codebase. You have to trust the author based on track record and community reviews. The track record is good (entry #148 on Nexus with significant downloads) but formally there's no verification.

## Remote dedicated server handling

This is where CertiFried has a clear edge. Its SFTP integration deploys mods directly to the remote server without manually using FileZilla. For community server admins, this turns a 20-minute task into a 30-second one.

Vercadi doesn't support remote — mods install locally. If your server is local too, fine. If it's remote, you'll do manual upload of each .pak via external SFTP client, which nullifies the value of having a manager.

## Config handling

CertiFried opens `ServerDescription.json` and `WorldDescription.json` with structured UI — identifiable fields, validation, sane defaults. Vercadi also edits configs but with a more bare-bones UI.

For admins who touch configs frequently, CertiFried reduces typo risk that breaks the server.

## Decision matrix

| Setup | Recommended manager |
|---|---|
| Pure single-player client | Vercadi |
| Client + local server co-op | Vercadi |
| Client + remote dedicated server | CertiFried |
| Want to audit code before install | Vercadi |
| Need full features with guided UI | CertiFried |
| Accept closed source | CertiFried |
| Want to contribute to the project | Vercadi |

## Combined recommendation

No point having both installed simultaneously — they're interchangeable. Choice depends on your setup. If you're starting and unsure, **Vercadi is the safe default**: open source, scope right for the common case. If your needs grow later (remote dedicated server), migrating to CertiFried is a clear one-day change.
