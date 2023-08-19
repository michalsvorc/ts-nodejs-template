import { hello } from './hello';
import { nanoid } from 'nanoid'; // Test "ESM only" module import
import type { Result } from './types';

const result: Result = {
  id: nanoid(),
  greeting: hello('World'),
};

export default result;
