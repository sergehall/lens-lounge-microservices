// frontend/src/utils/dom.ts

import { env } from '../config/env/env.service';

export const getRootElement = (): HTMLElement => {
  const id = env.VITE_ROOT_ID;
  console.log(`🧩 Looking for element with ID: ${id}`); // Log the ID being searched for

  const el = document.getElementById(id);

  if (!(el instanceof HTMLElement)) {
    console.error(`❌ HTMLElement with ID "${id}" not found in DOM`);
    throw new Error(`❌ No valid HTMLElement found with ID "${id}"`);
  }

  console.log(`✅ Found root element with ID "${id}"`);
  return el;
};
