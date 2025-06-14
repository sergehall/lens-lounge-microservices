// generate-migration.ts

import { exec as execCallback } from 'node:child_process';
import fs from 'node:fs';
import { promisify } from 'node:util';
import { glob } from 'glob-promise';

const exec = promisify(execCallback);

// Check if a migration name was provided
if (process.argv.length < 3) {
  console.log("You're almost there! Just one more thing... 🚀");
  console.error('Please provide a migration name.');
  process.exit(1);
}

const migrationName = process.argv[2];
const sourceFile = './src/db/data-source.ts';

// Ensure the data-source file exists before proceeding
if (!fs.existsSync(sourceFile)) {
  console.error(`Source file ${sourceFile} does not exist.`);
  process.exit(1);
}

// Generate the migration using TypeORM CLI
const command = `typeorm-ts-node-esm migration:generate ./src/db/migrations/${migrationName} -d ${sourceFile}`;

try {
  const { stdout } = await exec(command);
  console.log(stdout);

  // Find all migration files
  const files = await glob('./src/db/migrations/*.ts');
  if (files.length === 0) {
    console.log('No new migration files found to add to Git staging area.');
    process.exit(0);
  }

  // Get the last created migration and add it to Git
  const lastCreatedMigration = files[files.length - 1];
  await exec(`git add ${lastCreatedMigration}`);
  console.log(`✅ Staged latest migration:\n${lastCreatedMigration}`);

  // Automatically fix style issues with ESLint
  await exec(`npx eslint --fix ${files.join(' ')}`);
  console.log('✨ ESLint fixes applied to migration files.');
} catch (error) {
  const err = error as Error;
  console.error(`❌ ${err.message}`);
  process.exit(1);
}
