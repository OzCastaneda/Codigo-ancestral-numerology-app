import { default as zxcvbn } from 'zxcvbn';

const LABELS = ['Muy débil', 'Débil', 'Normal', 'Fuerte', 'Muy fuerte'];

export default function validatePassword(password) {
  const result = zxcvbn(password);
  return {
    score: result.score,
    feedback: result.feedback.suggestions,
    isStrong: result.score >= 3,
    strengthLabel: LABELS[result.score],
  };
}
