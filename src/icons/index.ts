const iconNames = [
  'chevron',
  'chart',
  'home',
  'copy',
  'megaphone',
  'graph',
  'money'
] as const;

export type IconNamesType = (typeof iconNames)[number];
