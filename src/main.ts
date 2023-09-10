import { hello } from './hello/index.js';
import { nanoid } from 'nanoid';
import type { Result } from './types';

const result: Result = {
  id: nanoid(),
  greeting: hello('World'),
};

export default result;
