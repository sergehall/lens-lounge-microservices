import logo from '../../assets/images/logo.svg';

// Test to verify that posts-slider-images import is mocked correctly
test('posts-slider-images mocks returns the stub value', () => {
  // Logs the mocked posts-slider-images import value ('test-file-stub')
  console.log('Mocked logo import:', logo);

  // Verifies that the imported 'logo' is the mocked value
  expect(logo).toBe('test-file-stub');
});

// Explanation:
// Whenever Jest encounters an import for file types like .svg, .png, .jpg, etc.,
// specified in the moduleNameMapper in jest.config.ts,
// it will redirect the import to __mocks__/fileMock.js.
// This file will return the string 'test-file-stub'
// in place of the actual posts-slider-images or file content.
