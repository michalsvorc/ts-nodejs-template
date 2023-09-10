/* eslint-disable no-console */
import { $ } from 'execa';
import esbuild from 'esbuild';

const OUTPUT_DIRECTORY = 'dist';

const buildOptions = {
  entryPoints: ['src/index.ts'],
  format: 'esm',
  bundle: true,
  platform: 'node',
  external: [],
  outfile: `${OUTPUT_DIRECTORY}/index.mjs`,
  logLevel: 'debug',
};

async function removeOutputDirectory() {
  console.info(`Cleaning ${OUTPUT_DIRECTORY}`);
  await $`rm -rf ${OUTPUT_DIRECTORY}`;
}

function build() {
  return esbuild.build(buildOptions);
}

await removeOutputDirectory();
build().catch(error => {
  console.error(error);
  process.exit(1);
});
