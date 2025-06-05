let envFilePath = '.env.local';

switch (process.env.NODE_ENV) {
  case 'production':
    envFilePath = '.env.docker';
    break;
  case 'development':
    envFilePath = '.env.local';
    break;
  case 'testing':
    envFilePath = '.env.test';
    break;
}

export { envFilePath };
