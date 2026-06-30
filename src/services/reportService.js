import { ensureClient } from '../lib/supabase';

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

export async function getUserReports(userId, page = 1, pageSize = 10) {
  const client = ensureClient();
  const offset = (page - 1) * pageSize;

  const countQuery = client
    .from('numerology_reports')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId);

  const dataQuery = client
    .from('numerology_reports')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .range(offset, offset + pageSize - 1);

  const [{ count }, { data, error }] = await Promise.all([countQuery, dataQuery]);

  if (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }

  return {
    reports: data,
    total: count,
    page,
    pageSize,
    hasMore: offset + pageSize < count,
  };
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

export async function deleteReport(reportId) {
  const client = ensureClient();
  const { data, error } = await client
    .from('numerology_reports')
    .delete()
    .eq('id', reportId)
    .select()
    .single();
  if (error) {
    console.error('Error deleting report:', error);
    throw error;
  }
  return { success: true, deletedId: reportId };
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
