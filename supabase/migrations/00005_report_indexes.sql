-- Optimización de queries para numerology_reports
-- Acelera búsqueda por usuario, ordenamiento por fecha, y combinación de ambas

CREATE INDEX IF NOT EXISTS idx_reports_user_id
ON numerology_reports(user_id);

CREATE INDEX IF NOT EXISTS idx_reports_created_at
ON numerology_reports(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_reports_user_created
ON numerology_reports(user_id, created_at DESC);
