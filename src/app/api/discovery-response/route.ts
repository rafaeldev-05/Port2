import { NextResponse } from 'next/server';
import { createSupabaseAdminClient } from '@/lib/supabaseAdmin';

const sourceOptions = [
  'linkedin',
  'whatsapp',
  'instagram',
  'tiktok',
  'github',
  'youtube',
  'google',
  'presential_event',
  'friend_referral',
  'resume_process',
  'other_social',
  'other'
] as const;

const countryOptions = [
  'brazil',
  'united_states',
  'portugal',
  'united_kingdom',
  'canada',
  'germany',
  'spain',
  'france',
  'italy',
  'ireland',
  'malta',
  'other'
] as const;

type DiscoveryPayload = {
  source: string;
  sourceOther: string;
  country: string;
  countryOther: string;
  pagePath: string;
  browserLanguage: string;
};

const fieldLimits = {
  sourceOther: 120,
  countryOther: 120,
  pagePath: 240,
  browserLanguage: 40
} as const;

function normalizeString(value: unknown, limit: number) {
  return String(value || '').trim().slice(0, limit);
}

function normalizePayload(body: unknown): DiscoveryPayload {
  const input = body && typeof body === 'object' ? body as Record<string, unknown> : {};

  return {
    source: String(input.source || '').trim(),
    sourceOther: normalizeString(input.sourceOther, fieldLimits.sourceOther),
    country: String(input.country || '').trim(),
    countryOther: normalizeString(input.countryOther, fieldLimits.countryOther),
    pagePath: normalizeString(input.pagePath, fieldLimits.pagePath),
    browserLanguage: normalizeString(input.browserLanguage, fieldLimits.browserLanguage)
  };
}

function validatePayload(payload: DiscoveryPayload) {
  if (!sourceOptions.includes(payload.source as typeof sourceOptions[number])) {
    return 'Invalid source.';
  }

  if (!countryOptions.includes(payload.country as typeof countryOptions[number])) {
    return 'Invalid country.';
  }

  return '';
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const payload = normalizePayload(body);
    const validationError = validatePayload(payload);

    if (validationError) {
      return NextResponse.json({ ok: false, message: 'Invalid payload' }, { status: 400 });
    }

    const supabaseAdmin = createSupabaseAdminClient();
    const { error } = await supabaseAdmin
      .from('portfolio_discovery_responses')
      .insert({
        source: payload.source,
        source_other: payload.source === 'other' ? payload.sourceOther || null : null,
        country: payload.country,
        country_other: payload.country === 'other' ? payload.countryOther || null : null,
        page_path: payload.pagePath || null,
        browser_language: payload.browserLanguage || null
      });

    if (error) {
      return NextResponse.json({ ok: false, message: 'Could not save response' }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: false, message: 'Could not process request' }, { status: 500 });
  }
}
