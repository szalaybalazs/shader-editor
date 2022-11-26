export const record = async (canvas: HTMLCanvasElement, time: number): Promise<string> => {
  return new Promise((res, rej) => {
    var stream = canvas.captureStream(60 /*fps*/);

    // const mediaRecorder = new MediaRecorder(stream, {
    //   mimeType: 'video/webm; codecs=vp9',
    // });

    // //ondataavailable will fire in interval of `time || 4000 ms`
    // mediaRecorder.start(time || 1000);

    // mediaRecorder.ondataavailable = function (event) {
    //   recordedChunks.push(event.data);
    //   // after stop `dataavilable` event run one more time
    //   if (mediaRecorder.state === 'recording') {
    //     mediaRecorder.stop();
    //   }
    // };

    // mediaRecorder.onstop = function (event) {
    //   var blob = new Blob(recordedChunks, { type: 'video/webm' });
    //   var url = URL.createObjectURL(blob);
    //   res(url);
    // };

    const recordedChunks = [];

    console.log(stream);
    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'video/webm',
      audioBitsPerSecond: 0,
      videoBitsPerSecond: 8000000,
    });

    setTimeout(() => mediaRecorder.stop(), time || 1000);

    mediaRecorder.start();

    mediaRecorder.addEventListener('dataavailable', (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
        console.log(recordedChunks);
        const blob = new Blob(recordedChunks, {
          type: 'video/webm',
        });
        const url = URL.createObjectURL(blob);

        res(url);
      } else {
        rej('EMPTY');
      }
    });
  });
};
