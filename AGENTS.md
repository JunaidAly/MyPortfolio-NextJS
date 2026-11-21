# Project Agent Rules & Security Policy (`AGENTS.md`)

## 1. Mandatory Pre-Commit & Pre-Push Malware Audit (STRICT RULE)

Before staging, committing, or pushing any changes—or before running `npm run dev`, `npm run build`, or `npm run start` after pulling external commits—you **MUST** perform a security and malware check on the repository:

1. **Inspect Modified and Configuration Files**:
   - Always inspect changes in `next.config.*`, `postcss.config.*`, `tailwind.config.*`, `eslint.config.*`, `package.json`, `.gitignore`, and any `.vscode/*` files.
   - Check for hidden single-line payloads pushed far to the right using tab/space padding (lines over 800 characters in config files).
2. **Scan for Malicious Patterns**:
   - Run a scan across tracked files for obfuscated loaders, unauthorized child process spawning, or remote code execution patterns:
     ```powershell
     git grep -l -I -E "child_process|eth_getBlockByNumber|eval\(|atob\(|global\[|global\.i ?=|require\('node:|spawn\(|x-payload|folderOpen" -- . ":!node_modules" ":!package-lock.json"
     ```
   - Verify `package.json` scripts (`dev`, `build`, `start`, `lint`, `preinstall`, `postinstall`, `prepare`) only run legitimate project binaries (e.g. `next dev`, `next build`, `next start`, `next lint`) and do **not** execute unknown bootstrap scripts (such as `node init` or `node api.js`).
   - Verify `.vscode/tasks.json` does **not** contain `runOn: "folderOpen"` background shell/cmd tasks.
3. **Remediate First, Then Push**:
   - **Never push commits if malware or suspicious obfuscated code is detected.**
   - Remove all malicious payloads, unauthorized scripts, and persistence hooks **first**, verify the working tree and commit history are clean, and only then commit and push the clean code.

## 2. Canonical Domain Policy

- The canonical production domain for this portfolio is **`https://junaiddev.skill-bridge.me`**.
- Never replace or redirect `junaiddev.skill-bridge.me` to `junaidaly.vercel.app`.
- Do not modify the main SkillBridge production application.
