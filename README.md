# hono-mcp-lite
Minimal mcp server using fiberplane [mcp-lite](https://github.com/fiberplane/mcp/)

### MCP usage
MCP server listens on endpoint https://hono-mcp-lite.jldec.workers.dev/mcp

### Test UI
https://hono-mcp-lite.jldec.workers.dev/

<img width="1113" height="829" alt="Screenshot 2025-09-06 at 20 45 11" src="https://github.com/user-attachments/assets/996ddcd8-7a63-4b42-91ff-2927b5f909ff" />

### dev / deploy
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Deploy to Cloudflare Workers
pnpm ship
```
