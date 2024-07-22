import { createFactory } from 'hono/factory';
import { Db } from 'mongodb';

type Env = {
  Variables: {
    db: Db;
  };
};

const factory = createFactory<Env>();

export default factory;
