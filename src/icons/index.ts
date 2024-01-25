const iconNames = [
  'chevron',
  'chart',
  'home',
  'copy',
  'megaphone',
  'graph',
  'money',
  'bitcoin-logo',
  'ethereum-logo'
] as const;

export type IconNamesType = (typeof iconNames)[number];
