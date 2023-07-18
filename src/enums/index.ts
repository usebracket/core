export * from './intersectionFieldType';

export enum Host {
  single_tenant = 'single-tenant',
  multi_tenant = 'multi-tenant',
}

export enum SyncStrategy {
  iterative = 'iterative',
  asynchronous = 'asynchronous',
  stream = 'stream',
}

export enum MutationType {
  update = 'UPDATE',
  upsert = 'UPSERT',
}

export enum SecurityPolicy {
  DYNAMIC_IP_ADDRESS = 'dynamic',
  STATIC_IP_ADDRESS = 'static',
}

export enum SyncDirection {
  FROM_PRIMARY_TO_SECONDARY = '1',
  FROM_SECONDARY_TO_PRIMARY = '2',
  BIDIRECTIONAL = '3',
}

export enum TableOptions {
  CREATE_TABLE = '1',
  USE_EXISTING_TABLE = '2',
}

export enum DataSourceType {
  airtable = 'airtable',
  all = 'all',
  bigquery = 'bigquery',
  dynamodb = 'dynamodb',
  firebase = 'firebase',
  firestore = 'firestore',
  gsheet = 'gsheet',
  merge = 'merge',
  mongodb = 'mongodb',
  mysql = 'mysql',
  notion = 'notion',
  postgres = 'postgres',
  snowflake = 'snowflake',
  vessel = 'vessel',
}

export enum Env {
  dev = 'dev',
  stg = 'stg',
  prd = 'prd',
}
