export const asBuffer = (maybeBuffer: Buffer | string, encoding: BufferEncoding = "ascii"): Buffer =>
  Buffer.isBuffer(maybeBuffer) ? maybeBuffer : Buffer.from(maybeBuffer, encoding);

export const asSizedBuffer = (
  maybeBuffer: Buffer | string,
  size: number,
  encoding: BufferEncoding = "ascii",
): Buffer => {
  // Convert the input to a Buffer using the specified encoding
  const buffer = asBuffer(maybeBuffer, encoding);
  if (buffer.length === size) {
    // If the buffer is already the correct size, return it directly
    return buffer;
  } else if (buffer.length > size) {
    // If the buffer is too long, truncate it
    return buffer.subarray(0, size);
  } else {
    // If the buffer is too short, pad it
    // Determine the padding size
    const paddingSize = size - buffer.length;
    // Create a padding buffer filled with zeros
    const padding = Buffer.alloc(paddingSize, 0);
    // Concatenate the original buffer with the padding
    return Buffer.concat([buffer, padding], size);
  }
};

export const asTruncatedString = (buffer: Buffer, encoding?: BufferEncoding): string => {
  const nullIndex = buffer.indexOf(0);
  const result = nullIndex === -1 ? buffer : buffer.subarray(0, nullIndex);
  return result.toString(encoding);
};
