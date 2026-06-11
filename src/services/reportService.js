import { supabase } from '../lib/supabase';

function ensureClient() {
  if (!supabase) {
    throw new Error(
      'Supabase no está configurado. Define VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en tu .env'
    );
  }
  return supabase;
}

export async function createReport(reportData) {
  const client = ensureClient();
  const { data, error } = await client
    .from('numerology_reports')
    .insert(reportData)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function saveReport(userId, reportData) {
  const client = ensureClient();
  const { data, error } = await client
    .from('numerology_reports')
    .insert({
      user_id: userId,
      full_name: reportData.fullName,
      birth_date: reportData.birthDate,
      destiny_number: reportData.destinyNumber,
      soul_number: reportData.soulNumber,
      personality_number: reportData.personalityNumber,
      mission_number: reportData.missionNumber,
      raw_result: reportData,
    })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function getUserReports(userId) {
  const { data, error } = await supabase
    .from('numerology_reports')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', {
      ascending: false,
    });

  if (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }

  return data;
}

export async function updateReportPDF(reportId, pdfUrl) {
  const client = ensureClient();
  const { data, error } = await client
    .from('numerology_reports')
    .update({ pdf_url: pdfUrl })
    .eq('id', reportId)
    .select()
    .single();
  if (error) {
    console.error('Error updating PDF URL:', error);
    throw error;
  }
  return data;
}

export async function getReportById(reportId) {
  const client = ensureClient();
  const { data, error } = await client
    .from('numerology_reports')
    .select('*')
    .eq('id', reportId)
    .single();
  if (error) {
    console.error('Error fetching report by ID:', error);
    throw error;
  }
  return data;
}
