const iconNames = [
  'chevron',
  'chart',
  'home',
  'copy',
  'megaphone',
  'graph',
  'money',
  'bitcoin-logo',
  'ethereum-logo',
  'robot-img'
] as const;

export type IconNamesType = (typeof iconNames)[number];
