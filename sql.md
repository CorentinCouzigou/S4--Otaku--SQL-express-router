sudo -i -u postgres
psql
CREATE ROLE nom de l'administrateur WITH PASSWORD 'mot de passe';
CREATE DATABASE nom de la base de donnée OWNER nom de l'administrateur;
psql -U nom de l'administrateur -d nom de la base de données -f chemin du dossier .sql;
SELECT * FROM viewing WHERE id < 16;
SELECT *  FROM viewing ORDER BY random();
SELECT *  FROM viewing WHERE id < 16 ORDER BY random();
SELECT AVG(viewer_age_group),viewer_country  FROM viewing GROUP BY viewer_country;
SELECT COUNT(episode), viewer_age_group FROM viewing GROUP BY viewer_age_group;
SELECT COUNT(episode), viewer_age_group FROM viewing GROUP BY viewer_age_group ORDER BY viewer_age_group DESC ;

