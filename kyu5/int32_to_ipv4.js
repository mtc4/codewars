function int32ToIp(int32) {
  const binaryNumber = int32.toString(2).padStart(32, "0");
  let buffer = [];
  let result = [];
  let octetFrame = 8;

  for (let i = 0; i < 4; i++) {
    buffer[i] = binaryNumber.slice(octetFrame - 8, octetFrame);
    octetFrame += 8;
    if (!buffer[i]) buffer[i] = "0";
  }

  for (let j = 0; j < buffer.length; j++) {
    result[j] = parseInt(buffer[j], 2);
  }

  return result.join(".");
}
