/**
 * Gzip-compress a string and return it as a base64-encoded payload.
 * Uses CompressionStream API (available in modern browsers).
 */
export async function gzipEncode(text: string): Promise<string> {
  const bytes = new TextEncoder().encode(text);
  const cs = new CompressionStream("gzip");
  const writer = cs.writable.getWriter();
  writer.write(bytes);
  writer.close();
  const reader = cs.readable.getReader();
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }
  let total = 0;
  for (const c of chunks) total += c.length;
  const combined = new Uint8Array(total);
  let offset = 0;
  for (const c of chunks) {
    combined.set(c, offset);
    offset += c.length;
  }
  let binary = "";
  for (let i = 0; i < combined.length; i++) {
    binary += String.fromCharCode(combined[i]);
  }
  return btoa(binary);
}

/**
 * Decode a base64 payload and gzip-decompress it back to the original string.
 * Uses Node.js zlib (available in Cloudflare Workers via nodejs_compat).
 * Returns null if decoding or decompression fails.
 */
export async function gzipDecode(encoded: string): Promise<string | null> {
  try {
    const { gunzipSync } = await import("node:zlib");
    const buffer = Buffer.from(encoded, "base64");
    const decompressed = gunzipSync(buffer);
    return decompressed.toString("utf-8");
  } catch {
    return null;
  }
}
