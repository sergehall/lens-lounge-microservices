// src/setupTests.ts
import '@testing-library/jest-dom';
import 'whatwg-fetch';

console.log('✅ setupTests.ts loaded');

// Polyfill: matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string): MediaQueryList => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
  }),
});

// Polyfill: scrollTo
window.scrollTo = jest.fn();

// Polyfill: IntersectionObserver
class IntersectionObserverMock implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];

  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
  takeRecords = jest.fn(() => []);

  constructor(_: IntersectionObserverCallback, __?: IntersectionObserverInit) {}
}

window.IntersectionObserver = IntersectionObserverMock;

// Polyfill: global.fetch (RTK Query compatible)
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve({}),
    clone: () => ({
      ok: true,
      status: 200,
      json: () => Promise.resolve({}),
    }),
  })
) as jest.Mock;
