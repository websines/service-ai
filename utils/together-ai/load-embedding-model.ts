import Together from 'together-ai';

const apiKey = process.env.TOGETHER_API_KEY;

if (!apiKey) {
  throw new Error('TOGETHER_API_KEY is not set in the environment variables');
}

export const togetherAI = new Together({ apiKey });

// Example usage:
// import { togetherAI } from './path/to/load-embedding-model';
// 
// async function someFunction() {
//   try {
//     const embeddingModel = await togetherAI.embeddings('togethercomputer/m2-bert-80M-32k-retrieval');
//     // Use embeddingModel as needed
//   } catch (error) {
//     console.error('Error using embedding model:', error);
//   }
// }
