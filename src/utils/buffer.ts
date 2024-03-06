export const asBuffer = (maybeBuffer: Buffer | string, encoding: BufferEncoding = "ascii"): Buffer =>
  Buffer.isBuffer(maybeBuffer) ? maybeBuffer : Buffer.from(maybeBuffer, encoding);

export const asTruncatedString = (buffer: Buffer, encoding?: BufferEncoding): string => {
  const nullIndex = buffer.indexOf(0);
  const result = nullIndex === -1 ? buffer : buffer.subarray(0, nullIndex);
  return result.toString(encoding);
};
