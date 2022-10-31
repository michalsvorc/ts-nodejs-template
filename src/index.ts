import { hello } from "./hello/hello.js";
import { nanoid } from "nanoid";
import set from "set-value";

const greeting = hello("World");
const id = nanoid();
const result = {
  NODE_ENV: process.env.NODE_ENV,
};

set(result, "id", id);
set(result, "greeting", greeting);

// eslint-disable-next-line no-console
console.info({ result });

export { result };
