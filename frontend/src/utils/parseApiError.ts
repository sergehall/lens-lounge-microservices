import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface ErrorWithMessage {
  message?: string | string[];
}

export const parseApiError = (error: unknown): string => {
  if (!error) return 'Unknown error';

  if ('status' in (error as FetchBaseQueryError)) {
    const e = error as FetchBaseQueryError;
    const data = e.data;

    if (typeof data === 'string') return data;

    if (data && typeof data === 'object' && 'message' in data) {
      const { message } = data as ErrorWithMessage;
      if (Array.isArray(message)) return message.join(', ');
      return String(message);
    }
  }

  if (error instanceof Error) return error.message;

  return 'Unexpected error';
};
