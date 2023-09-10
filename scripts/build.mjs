/* eslint-disable no-console */
import { $ } from 'execa';

const OUTPUT_DIRECTORY = 'dist';
const TS_CONFIG_FILE = 'tsconfig.build.json';

function removeOutputDirectory() {
  return $`rm -rf ${OUTPUT_DIRECTORY}`;
}

function build() {
  return $`tsc --project ${TS_CONFIG_FILE}`;
}

await removeOutputDirectory();
await build();

console.info('Done!');

