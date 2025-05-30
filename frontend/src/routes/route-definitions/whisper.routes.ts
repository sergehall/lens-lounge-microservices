// src/routes/route-definitions/whisper.routes.ts

import { buildRoute } from '../utils/buildRoute';

const WHISPER_ROUTES_BASE = {
  // Static routes
  root: '/whisper',
  chatsRoot: '/whisper/chats',
  chatId: '/whisper/chats/:chatId',
  contactsRoot: '/whisper/contacts',
  contactId: '/whisper/contacts/:contactId',
  postsRoot: '/whisper/posts',
  postId: '/whisper/posts/:postId',
} as const;

export const WHISPER_ROUTES = {
  ...WHISPER_ROUTES_BASE,

  build: {
    chatId: (chatId: string): `${typeof WHISPER_ROUTES_BASE.chatsRoot}/${string}` =>
      buildRoute(WHISPER_ROUTES_BASE.chatId, {
        chatId,
      }) as `${typeof WHISPER_ROUTES_BASE.chatsRoot}/${string}`,

    contactId: (contactId: string): `${typeof WHISPER_ROUTES_BASE.contactsRoot}/${string}` =>
      buildRoute(WHISPER_ROUTES_BASE.contactId, {
        contactId,
      }) as `${typeof WHISPER_ROUTES_BASE.contactsRoot}/${string}`,

    postId: (postId: string): `${typeof WHISPER_ROUTES_BASE.postsRoot}/${string}` =>
      buildRoute(WHISPER_ROUTES_BASE.postId, {
        postId,
      }) as `${typeof WHISPER_ROUTES_BASE.postsRoot}/${string}`,
  },
} as const;
