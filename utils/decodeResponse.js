const decodeResponse = async (response) => {
  const reader = response.body.getReader();
  const chunks = [];

  // eslint-disable-next-line no-async-promise-executor
  const readChunks = () => new Promise(async (resolve, reject) => {
    try {
      const { done, value } = await reader.read();
      if (done) {
        const totalLength = chunks.reduce(
          (acc, chunk) => acc + chunk.length,
          0,
        );
        const result = new Uint8Array(totalLength);

        chunks.reduce((offset, chunk) => {
          result.set(chunk, offset);
          return offset + chunk.length;
        }, 0);

        const data = new TextDecoder().decode(result);
        const parsedData = JSON.parse(data);
        resolve(parsedData);
      } else {
        chunks.push(value);
        readChunks().then(resolve).catch(reject);
      }
    } catch (error) {
      reject(error);
    }
  });

  // eslint-disable-next-line no-async-promise-executor,no-return-await
  return await readChunks();
};

export default decodeResponse;
