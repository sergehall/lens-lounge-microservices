import { TechnologyName } from '../types/technologyName';

export interface TechnologyLinkType {
  name: string;
  url: string;
}

export const techLinksMock: TechnologyLinkType[] = [
  {
    name: TechnologyName.CSS,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: TechnologyName.HTML,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: TechnologyName.JAVASCRIPT,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  { name: TechnologyName.TYPESCRIPT, url: 'https://www.typescriptlang.org/' },
  { name: TechnologyName.REACTJS, url: 'https://reactjs.org/' },
  { name: TechnologyName.NESTJS, url: 'https://nestjs.com/' },
  { name: TechnologyName.POSTGRESQL, url: 'https://www.postgresql.org/' },
  { name: TechnologyName.NODEJS, url: 'https://nodejs.org/' },
  { name: TechnologyName.EXPRESS, url: 'https://expressjs.com/' },
  { name: TechnologyName.MICROSERVICES, url: 'https://microservices.io/' },
  { name: TechnologyName.RABBITMQ, url: 'https://www.rabbitmq.com/' },
  {
    name: TechnologyName.WEBSOCKET,
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
  },
  { name: TechnologyName.DOCKER, url: 'https://www.docker.com/' },
  { name: TechnologyName.KUBERNETES, url: 'https://kubernetes.io/' },
  { name: TechnologyName.JENKINS, url: 'https://www.jenkins.io/' },
  { name: TechnologyName.SOLID, url: 'https://solidjs.com/' },
  {
    name: TechnologyName.HEXAGONAL_ARCHITECTURE,
    url: 'https://alistair.cockburn.us/hexagonal-architecture/',
  },
  {
    name: TechnologyName.SAGA,
    url: 'https://microservices.io/patterns/data/saga.html',
  },
  { name: TechnologyName.YARN_BERRY, url: 'https://yarnpkg.com/' },
  { name: TechnologyName.NPM, url: 'https://www.npmjs.com/' },
  {
    name: TechnologyName.JAVASCRIPT_ES6_PLUS,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
  },
  { name: TechnologyName.VITE, url: 'https://vitejs.dev/' },
  { name: TechnologyName.REACT_ROUTER, url: 'https://reactrouter.com/' },
  { name: TechnologyName.AXIOS, url: 'https://axios-http.com/' },
  {
    name: TechnologyName.FETCH,
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
  },
  { name: TechnologyName.REACT_QUERY, url: 'https://tanstack.com/query' },
  { name: TechnologyName.REDUX, url: 'https://redux.js.org/' },
  {
    name: TechnologyName.ZUSTAND,
    url: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
  },
  { name: TechnologyName.RECOIL, url: 'https://recoiljs.org/' },
  {
    name: TechnologyName.STYLED_COMPONENTS,
    url: 'https://styled-components.com/',
  },
  {
    name: TechnologyName.CSS_MODULES,
    url: 'https://github.com/css-modules/css-modules',
  },
  { name: TechnologyName.TAILWIND_CSS, url: 'https://tailwindcss.com/' },
  { name: TechnologyName.WEBPACK, url: 'https://webpack.js.org/' },
  {
    name: TechnologyName.REACT_TESTING_LIBRARY,
    url: 'https://testing-library.com/docs/react-testing-library/intro/',
  },
  { name: TechnologyName.JEST, url: 'https://jestjs.io/' },
  { name: TechnologyName.ESLINT, url: 'https://eslint.org/' },
  { name: TechnologyName.PRETTIER, url: 'https://prettier.io/' },
  { name: TechnologyName.STORYBOOK, url: 'https://storybook.js.org/' },
];
