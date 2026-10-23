export type Role = { org: string; title: string; period: string; note?: string };

// `org` must match the `org` field in src/content/cv/*.md so the timeline
// can attach each role's accomplishments. `note` is a one-line fallback for
// roles that have no entry of their own.
export const roles: Role[] = [
  { org: 'Finally', title: 'Founding Senior Data Engineer', period: 'Jul 2025 to Sep 2026' },
  {
    org: 'The Lifetime Value Co.',
    title: 'Senior ETL Engineer II',
    period: 'Nov 2022 to Mar 2025',
    note: 'Airflow pipelines for secured PII and product data across Redshift, BigQuery, and Elasticsearch. Mentored junior engineers through code review.',
  },
  {
    org: 'Rent the Runway',
    title: 'Data Engineer III',
    period: 'Jan 2022 to Sep 2022',
    note: 'Object-oriented Prefect flows pulling APIs and MongoDB into Snowflake, with dbt tests that caught data issues before production.',
  },
  { org: 'Jane.com', title: 'Senior Data Engineer II', period: 'Feb 2020 to Jan 2022' },
  { org: 'UnitedHealth Group', title: 'Senior Data Engineer', period: 'Jul 2019 to Jan 2020' },
  {
    org: 'Pluralsight',
    title: 'Analytics Engineer II',
    period: 'Jul 2017 to Jul 2019',
    note: 'Sales and marketing ELT on dbt and GCP, attribution modeling in Hive and Impala, and an Airflow pipeline in Docker.',
  },
  {
    org: 'Oracle',
    title: 'Technical Support Engineer II, Oracle BI',
    period: 'Oct 2015 to Jul 2017',
    note: 'Where the data career started: BI Publisher data models and visualizations on the Oracle BI platform.',
  },
  { org: 'MasterControl', title: 'Technical Support Engineer II', period: 'Dec 2013 to Oct 2015' },
  {
    org: 'Discover Financial Services',
    title: 'Deskside Support Analyst and Computer Technician',
    period: '2012 to 2013',
    note: 'Deskside support and hardware at a card issuer.',
  },
];

export const education = [
  { school: 'University of Utah', degree: 'M.S., Information Systems', year: '2017' },
  { school: 'Brigham Young University', degree: 'B.A., International Relations', year: '2012' },
];
