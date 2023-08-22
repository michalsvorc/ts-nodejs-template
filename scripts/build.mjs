import esbuild from 'esbuild';

const esbuildOptions = {
    entryPoints: ['src/index.ts'],
    format: 'esm',
    bundle: true,
    platform: 'node',
    external: [],
    outfile: 'dist/index.mjs',
    logLevel: 'debug',
};

esbuild.build(esbuildOptions).catch((error) => {
  console.error(error);
  process.exit(1);
});
