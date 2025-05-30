import { env } from '../config/env/env.service';

/**
 * Safely retrieves the root DOM element by ID from the validated environment config.
 * @returns {HTMLElement} - The root element to mount the React app
 * @throws {Error} - If no element is found with the given ID
 */
export const getRootElement = (): HTMLElement => {
  const rootId: string = env.REACT_APP_ROOT_ID;
  const el: HTMLElement | null = document.getElementById(rootId);

  if (!el) {
    throw new Error(`❌ No element found with ID "${rootId}"`);
  }

  return el;
};
