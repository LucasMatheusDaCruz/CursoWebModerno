INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 95694186000132),
    ('Vale', 27887148000146),
    ('Cielo', 01598317000134);


DESC empresas;
DESC prefeitos;
SELECT * FROM empresas;
SELECT * FROM cidades;

DELETE FROM empresas_unidades WHERE empresa_id = 1 AND cidade_id = 1;
DELETE FROM empresas_unidades WHERE empresa_id = 1 AND cidade_id = 2;
DELETE FROM empresas_unidades WHERE empresa_id = 2 AND cidade_id = 1;
DELETE FROM empresas_unidades WHERE empresa_id = 2 AND cidade_id = 2;


INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);

SELECT * FROM empresas;