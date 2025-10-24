.schema produtos
CREATE TABLE produtos_temp AS
    SELECT id, codigo, descricao, valor_unitario, origem_tributacao, voltagem,
           aliq_icms, aliq_ipi, aliq_pis, aliq_cofins
    FROM produtos;

DROP TABLE produtos;
ALTER TABLE produtos_temp RENAME TO produtos;
.quit
