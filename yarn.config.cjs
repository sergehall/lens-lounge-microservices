/** @type {import('@yarnpkg/builder').ConstraintsExport} */
module.exports = {
  async constraints({ Yarn }) {
    console.log("✅ Constraints loaded");

    for (const ws of Yarn.workspaces()) {
      const name = typeof ws.manifest.name === 'string' ? ws.manifest.name : ws.manifest.name.name;
      console.log(`[DEBUG] Workspace directory detected: ${name}`);

      // --- Enforce specific versions of required dependencies in 'frontend'
      if (name === 'frontend') {
        const requiredDeps = {
          "react": "^19.1.0",
          "react-dom": "^19.1.0",
          "vite": "^6.3.5"
        };

        const deps = ws.manifest.dependencies || {};
        const devDeps = ws.manifest.devDependencies || {};

        const allDeps = Yarn.dependencies({ workspace: ws });

        for (const [depName, requiredVersion] of Object.entries(requiredDeps)) {
          const actualVersion = deps[depName] || devDeps[depName];
          if (!actualVersion) {
            console.warn(`⚠️ Missing dependency '${depName}' in '${name}'`);
          } else if (actualVersion !== requiredVersion) {
            // Report version mismatch using Yarn's reporting API if possible
            const dep = allDeps.find(d => d.ident.name === depName);
            if (dep) {
              dep.report({ message: `❌ '${depName}' must be '${requiredVersion}' in '${name}', found '${actualVersion}'` });
            } else {
              console.error(`❌ '${depName}' must be '${requiredVersion}' in '${name}', found '${actualVersion}'`);
            }
          }
        }
      }

      // --- Disallow UI-related dependencies in 'shared'
      if (name === 'shared') {
        const deps = ws.manifest.raw?.dependencies || {};
        for (const forbidden of ['react', 'react-dom', 'styled-components', 'vite']) {
          if (deps[forbidden]) {
            console.error(`❌ '${forbidden}' is not allowed in '${name}', found version: ${deps[forbidden]}`);
          }
        }
      }

      // --- Disallow frontend dependencies in backend services
      if (['api-gateway', 'payment-service'].includes(name)) {
        for (const dep of Yarn.dependencies({ workspace: ws })) {
          if (['react', 'vite'].includes(dep.ident.name)) {
            dep.report({ message: `❌ '${dep.ident.name}' is not allowed in '${name}'` });
          }
        }
      }

      // --- Disallow local installation of '@nestjs/microservices'
      if (name !== 'lens-lounge-microservices') {
        const deps = ws.manifest.dependencies || {};
        const devDeps = ws.manifest.devDependencies || {};

        const localVersion = deps['@nestjs/microservices'] || devDeps['@nestjs/microservices'];
        if (localVersion && localVersion !== '*') {
          console.error(`❌ '@nestjs/microservices' must not be installed locally in '${name}' with a fixed version. Use "*" or remove it.`);
        }
      }

      // --- Require PnP TypeScript visibility for shared deps
      const needsMicroservicesTypes = ['api-gateway', 'payment-service'];
      if (needsMicroservicesTypes.includes(name)) {
        const deps = ws.manifest.dependencies || {};
        if (!deps['@nestjs/microservices']) {
          console.warn(`⚠️ '${name}' should declare '@nestjs/microservices': "*" in package.json for TypeScript compatibility (PnP mode)`);
        } else if (deps['@nestjs/microservices'] !== '*') {
          console.error(`❌ '${name}' must declare '@nestjs/microservices' as "*", found "${deps['@nestjs/microservices']}"`);
        }
      }
    }
  }
};
