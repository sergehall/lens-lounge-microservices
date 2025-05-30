// src/config/unauthContent.ts

export interface UnauthLandingProps {
  title: string;
  description: string;
  warning: string;
}

export const unauthContent: Record<string, UnauthLandingProps> = {
  showcase: {
    title: 'Welcome to Showcase',
    description:
      'Here you can view and edit your blogs. Please sign in or create an account to get started.',
    warning: 'Only registered users can publish or manage blog content.',
  },

  whisper: {
    title: 'Welcome to Whisper',
    description: 'Please sign in or create an account to start chatting with the community.',
    warning: 'Only registered users can join and participate in real-time conversations.',
  },

  // Default fallback if a route doesn't specify unauthLandingProps
  default: {
    title: 'Welcome to Lens Lounge',
    description: 'Please register or sign in to complete your profile and join the community!',
    warning: 'Only registered users can view this content.',
  },
};
