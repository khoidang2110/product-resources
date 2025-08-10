CREATE TABLE IF NOT EXISTS product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price NUMERIC
);

INSERT INTO product (name, price) VALUES
('Product 1', 10.99),
('Product 2', 20.50),
('Product 3', 15.75);
