import { hello } from './hello';
import { nanoid } from 'nanoid';
import type { Result } from './types';

const result: Result = {
  id: nanoid(),
  greeting: hello('World'),
};

export default result;
