'use server';

export type ConsultationFormData = {
  name: string;
  phone: string;
  email: string;
  propertyName: string;
  language: string;
  region: string;
  consent: boolean;
};

export type ConsultationResult = { ok: true } | { ok: false; error: string };

export async function submitConsultation(data: ConsultationFormData): Promise<ConsultationResult> {
  // Validace
  if (!data.name?.trim()) return { ok: false, error: 'Vyplňte prosím jméno.' };
  if (!data.phone?.trim()) return { ok: false, error: 'Vyplňte prosím telefon.' };
  if (!data.email?.trim()) return { ok: false, error: 'Vyplňte prosím e-mail.' };
  if (!data.propertyName?.trim()) return { ok: false, error: 'Vyplňte název ubytovacího zařízení.' };
  if (!data.region) return { ok: false, error: 'Vyberte prosím kraj.' };
  if (!data.consent) return { ok: false, error: 'Je třeba souhlas se zpracováním osobních údajů.' };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) return { ok: false, error: 'Zadejte platnou e-mailovou adresu.' };

  try {
    // TODO: odeslání do CRM / e-mailu / API
    // např. await sendToCrm(data) nebo await sendEmail(data)
    console.log('[Consultation] New request:', {
      name: data.name,
      phone: data.phone,
      email: data.email,
      propertyName: data.propertyName,
      language: data.language,
      region: data.region,
    });
    return { ok: true };
  } catch (e) {
    console.error('[Consultation] Error:', e);
    return { ok: false, error: 'Odeslání se nezdařilo. Zkuste to prosím znovu nebo nás kontaktujte na info@previo.cz.' };
  }
}
