import { Hono } from 'hono'
import { renderer } from './renderer'
import { McpServer, StreamableHttpTransport } from 'mcp-lite'
import { z } from 'zod'
import Home from './Home'
import { greet } from './greet'

const app = new Hono<{ Bindings: CloudflareBindings }>()

const mcp = new McpServer({
  name: 'hono-mcp-lite',
  version: '1.0.0',
  schemaAdapter: (schema) => z.toJSONSchema(schema as z.ZodType)
})

const HelloSchema = z.object({
  name: z.optional(z.string())
})

mcp.tool('hello', {
  description:
    "Simple hello world MCP server with timestamp - says hello to name (defaults to 'world')",
  inputSchema: HelloSchema,
  handler: (args) => ({
    content: [{ type: 'text', text: greet(args.name) }]
  })
})

const transport = new StreamableHttpTransport()
const httpHandler = transport.bind(mcp)

app.all('/mcp', async (c) => {
  const response = await httpHandler(c.req.raw)
  return response
})

app.use(renderer)

app.get('/', (c) => {
  return c.render(<Home />)
})

export default app
