import { parentPort, workerData } from "worker_threads";

// Recupera os dados enviados pela thread principal
const { number } = workerData;

// Simulação de uma operação pesada
const result = isPrime(number);

// Envia o resultado de volta para a thread principal
parentPort.postMessage(result);

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;

  return true;
}
