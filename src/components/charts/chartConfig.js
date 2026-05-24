export const COLORS = {
  primary: '#8B5CF6',
  primaryLight: '#A78BFA',
  secondary: '#06B6D4',
  accent: '#F59E0B',
  accentLight: '#FBBF24',
  success: '#10B981',
  danger: '#EF4444',
  info: '#3B82F6',
  purple: '#8B5CF6',
  cyan: '#22D3EE',
  gold: '#F59E0B',
  pink: '#EC4899',
  indigo: '#6366F1',
  deepPurple: '#7C3AED',
  teal: '#14B8A6',
  orange: '#F97316',
};

export const RADAR_COLORS = [
  COLORS.purple,
  COLORS.cyan,
  COLORS.gold,
  COLORS.pink,
];

export const DONUT_COLORS = [
  '#8B5CF6',
  '#A78BFA',
  '#C4B5FD',
  '#DDD6FE',
  '#EDE9FE',
];

export const SEPHIROTH_COLORS = [
  '#F59E0B',
  '#8B5CF6',
  '#06B6D4',
  '#EC4899',
  '#10B981',
  '#3B82F6',
  '#F97316',
  '#6366F1',
  '#14B8A6',
  '#F43F5E',
];

export const getNumberColor = (num) => {
  const map = {
    1: '#8B5CF6',
    2: '#06B6D4',
    3: '#F59E0B',
    4: '#10B981',
    5: '#F97316',
    6: '#EC4899',
    7: '#3B82F6',
    8: '#6366F1',
    9: '#14B8A6',
    11: '#F59E0B',
    22: '#8B5CF6',
    33: '#06B6D4',
    44: '#F43F5E',
  };
  return map[num] || '#94A3B8';
};
