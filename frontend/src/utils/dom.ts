// frontend/src/utils/dom.ts

export const getRootElement = (): HTMLElement => {
  const id = 'root';
  const el = document.getElementById(`${id}`);

  if (!(el instanceof HTMLElement)) {
    console.error(`❌ HTMLElement with ID "${id}" not found in DOM`);
    throw new Error(`❌ No valid HTMLElement found with ID "${id}"`);
  }

  console.log(`Found root element with ID "${id}"`);
  return el;
};
