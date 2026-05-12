export const contactFieldLimits = {
  name: 120,
  email: 160,
  subject: 180,
  message: 3000
} as const;

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function normalizeContactPayload(body: unknown): ContactPayload {
  const input = body && typeof body === 'object' ? body as Partial<Record<keyof ContactPayload, unknown>> : {};

  return {
    name: String(input.name || '').trim(),
    email: String(input.email || '').trim(),
    subject: String(input.subject || '').trim(),
    message: String(input.message || '').trim()
  };
}

export function validateContactPayload(payload: ContactPayload) {
  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    return 'Please fill in all fields.';
  }

  for (const [field, limit] of Object.entries(contactFieldLimits)) {
    if (payload[field as keyof ContactPayload].length > limit) {
      return `${field} is too long.`;
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return 'Please provide a valid email address.';
  }

  return '';
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
