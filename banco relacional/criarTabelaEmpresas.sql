CREATE TABLE IF NOT EXISTS empresas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cnpj int unsigned,
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
);
-- CREATE TABLE IF NOT EXISTS empresas (
--     id INT UNSIGNED NOT NULL AUTO_INCREMENT,
--     nome VARCHAR(255) NOT NULL,
--     cnpj VARCHAR(14) UNSIGNED ZEROFILL NOT NULL,
--     PRIMARY KEY (id),
--     UNIQUE KEY (cnpj)
-- );


CREATE TABLE IF NOT EXISTS empresas_unidades (
    empresa_id INT UNSIGNED NOT NULL,
    cidade_id INT UNSIGNED NOT NULL,
    sede TINYINT(1) NOT NULL,
    PRIMARY KEY (empresa_id, cidade_id)
);