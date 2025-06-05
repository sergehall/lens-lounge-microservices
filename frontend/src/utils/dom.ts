// frontend/src/utils/dom.ts

import { env } from '../config/env/env.service';

export const getRootElement = (): HTMLElement => {
  const id = env.REACT_APP_ROOT_ID || 'root';
  const el = document.getElementById(id);

  if (!(el instanceof HTMLElement)) {
    throw new Error(`❌ No valid HTMLElement found with ID "${id}"`);
  }

  return el;
};
