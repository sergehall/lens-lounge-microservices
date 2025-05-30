// src/assets/images/types/images.d.ts

// Image formats
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

// SVG as source
declare module '*.svg' {
  const content: string;
  export default content;
}

// Optional: SVG as React component
declare module '*.svg?component' {
  import * as React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

// Fonts and media (optional but common)
declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';
declare module '*.eot';
declare module '*.mp4';
declare module '*.webm';
declare module '*.mp3';
