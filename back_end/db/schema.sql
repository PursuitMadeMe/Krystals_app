DROP DATABASE IF EXISTS krystals_dev;
CREATE DATABASE krystals_dev;

\c krystals_dev;

CREATE TABLE krystals (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    healing TEXT NOT NULL,
    chakra TEXT NOT NULL,
    url TEXT,
    numerology INT NOT NULL,
    category TEXT,
    is_favorite BOOLEAN
);
