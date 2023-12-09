export * from './intersectionFieldType';

export enum Host {
  single_tenant = 'single-tenant',
  multi_tenant = 'multi-tenant',
}

export enum SyncStrategy {
  iterative = 'iterative',
  asynchronous = 'asynchronous',
  stream = 'stream',
  event_driven = 'event_driven',
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
  salesforce = 'salesforce',
  hubspot = 'hubspot',
  zoho = 'zoho',
  pipedrive = 'pipedrive',
  dynamic_sales = 'dynamic_sales',
  close = 'close',
  affinity = 'affinity',
  sap = 'sap',
  mondaycom = 'mondaycom',
  freshsales = 'freshsales',
  freshdesk = 'freshdesk',
  salesloft = 'salesloft',
  outreach = 'outreach',
  apollo = 'apollo',
  active_campaign = 'active_campaign',
  mailchimp = 'mailchimp',
  customerio = 'customerio',
  slack = 'slack',
  zendesk = 'zendesk',
  intercom = 'intercom',
  front = 'front',
  woo_commerce = 'woo_commerce',
  shopify = 'shopify',
  klaviyo = 'klaviyo',
  quickbooks = 'quickbooks',
  xero = 'xero',
  stripe = 'stripe',
  click_up = 'click_up',
  s3 = 's3',
  braze = 'braze',
  iterable = 'iterable',
  google_analytics = 'google_analytics',
  facebook_ads = 'facebook_ads',
  jira = 'jira',
  asana = 'asana',
  linear = 'linear',
  netsuite = 'netsuite',
  marketo = 'marketo',
  pager_duty = 'pager_duty',
  twilio = 'twilio',
  bamboohr = 'bamboohr',
  workday = 'workday',
  okta = 'okta',
  podium = 'podium',
  big_query = 'big_query',
}

export enum Env {
  dev = 'dev',
  stg = 'stg',
  prd = 'prd',
}
