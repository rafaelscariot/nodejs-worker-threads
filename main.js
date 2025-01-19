import { Worker } from "worker_threads";

// Criando e enviando dados para a worker thread
const worker = new Worker("./src/worker.js", {
  workerData: { number: 15485863 },
});

worker.on("message", (result) => {
  console.log(`Resultado da thread secundária: ${result}`);
});
