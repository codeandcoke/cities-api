USE cities;

CREATE TABLE cities (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    altitude INT UNSIGNED DEFAULT 0,
    population INT UNSIGNED DEFAULT 0,
    capital BOOLEAN DEFAULT FALSE
);

INSERT INTO cities (name, altitude, population, capital) VALUES
    ('Zaragoza', 200, 700000, TRUE),
    ('Huesca', 500, 450000, FALSE),
    ('Teruel', 800, 35000, FALSE);
