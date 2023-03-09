UPDATE estados
SET nome = 'Maranhão'
WHERE sigla = 'MA';

SELECT Sigla, nome AS "Nome do Estado"
FROM estados
WHERE regiao = 'Sul';

UPDATE estados
SET nome = 'Paraná',
    populacao = 11.32
WHERE sigla = 'PR';

SELECT 
    nome,
    sigla,
    populacao
FROM estados
WHERE sigla = 'PR';
