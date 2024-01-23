const iconNames = ['chevron'] as const;

export type IconNamesType = (typeof iconNames)[number];
