import { describe, it, expect, vi, beforeEach } from 'vitest';

const mockSupabase = vi.hoisted(() => ({
  ensureClient: vi.fn(),
}));

vi.mock('../../lib/supabase', () => mockSupabase);

import {
  createReport,
  getUserReports,
  updateReportPDF,
  deleteReport,
  getReportById,
} from '../../services/reportService';

function buildClient() {
  const client = {
    from: vi.fn(() => client),
    select: vi.fn(() => client),
    insert: vi.fn(() => client),
    update: vi.fn(() => client),
    delete: vi.fn(() => client),
    eq: vi.fn(() => client),
    order: vi.fn(() => client),
    range: vi.fn(() => client),
    single: vi.fn(() => Promise.resolve({ data: null, error: null })),
  };
  return client;
}

let client;

beforeEach(() => {
  vi.clearAllMocks();
  client = buildClient();
  mockSupabase.ensureClient.mockReturnValue(client);
});

describe('reportService', () => {
  describe('getUserReports', () => {
    it('should be a function', () => {
      expect(typeof getUserReports).toBe('function');
    });

    it('should call the correct chain', async () => {
      client.eq
        .mockResolvedValueOnce({ count: 5, error: null })
        .mockReturnValue(client);
      client.range.mockResolvedValue({ data: [{ id: '1', full_name: 'Test' }], error: null });

      const result = await getUserReports('user-1', 1, 10);

      expect(client.from).toHaveBeenCalledWith('numerology_reports');
      expect(client.select).toHaveBeenNthCalledWith(1, 'id', { count: 'exact', head: true });
      expect(client.select).toHaveBeenNthCalledWith(2, '*');
      expect(client.eq).toHaveBeenCalledWith('user_id', 'user-1');
      expect(client.order).toHaveBeenCalledWith('created_at', { ascending: false });
      expect(client.range).toHaveBeenCalledWith(0, 9);
      expect(result).toEqual({
        reports: [{ id: '1', full_name: 'Test' }],
        total: 5,
        page: 1,
        pageSize: 10,
        hasMore: false,
      });
    });

    it('should set hasMore correctly when more pages exist', async () => {
      client.eq
        .mockResolvedValueOnce({ count: 25, error: null })
        .mockReturnValue(client);
      client.range.mockResolvedValue({ data: Array.from({ length: 10 }, (_, i) => ({ id: `${i}` })), error: null });

      const result = await getUserReports('user-1', 1, 10);
      expect(result.hasMore).toBe(true);
      expect(result.total).toBe(25);
    });
  });

  describe('deleteReport', () => {
    it('should be a function', () => {
      expect(typeof deleteReport).toBe('function');
    });

    it('should call delete with correct id', async () => {
      client.single.mockResolvedValue({ data: { id: 'r-1' }, error: null });

      const result = await deleteReport('r-1');

      expect(client.from).toHaveBeenCalledWith('numerology_reports');
      expect(client.delete).toHaveBeenCalled();
      expect(client.eq).toHaveBeenCalledWith('id', 'r-1');
      expect(result).toEqual({ success: true, deletedId: 'r-1' });
    });
  });

  describe('updateReportPDF', () => {
    it('should be a function', () => {
      expect(typeof updateReportPDF).toBe('function');
    });

    it('should call update with pdf_url', async () => {
      client.single.mockResolvedValue({ data: { id: 'r-1', pdf_url: 'https://example.com/pdf' }, error: null });

      const result = await updateReportPDF('r-1', 'https://example.com/pdf');

      expect(client.from).toHaveBeenCalledWith('numerology_reports');
      expect(client.eq).toHaveBeenCalledWith('id', 'r-1');
      expect(client.update).toHaveBeenCalledWith({ pdf_url: 'https://example.com/pdf' });
      expect(result).toHaveProperty('id', 'r-1');
      expect(result).toHaveProperty('pdf_url', 'https://example.com/pdf');
    });
  });

  describe('createReport', () => {
    it('should be a function', () => {
      expect(typeof createReport).toBe('function');
    });

    it('should call insert with report data', async () => {
      const reportData = { user_id: 'u-1', full_name: 'Test', destiny_number: 5 };
      client.single.mockResolvedValue({ data: { id: 'new-id', ...reportData }, error: null });

      const result = await createReport(reportData);

      expect(client.from).toHaveBeenCalledWith('numerology_reports');
      expect(client.insert).toHaveBeenCalledWith(reportData);
      expect(result).toHaveProperty('id', 'new-id');
    });
  });

  describe('getReportById', () => {
    it('should be a function', () => {
      expect(typeof getReportById).toBe('function');
    });
  });
});
