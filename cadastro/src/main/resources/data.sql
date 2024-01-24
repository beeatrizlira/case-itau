create schema if not exists cadastro;

use cadastro;

create table if not exists cadastro.tb_pessoa (
  id int auto_increment primary key,
  name varchar(200) not null,
  gender char(1) not null check (gender in ('F', 'M', 'O')),
  cpf varchar(11) not null,
  email varchar(200) not null,
  phone varchar(11),
  birth DATE not null,
  constraint uk_cpf unique (cpf),
  constraint uk_email unique (email)
);

insert into cadastro.tb_pessoa (name, gender, cpf, email, phone, birth)
values
  ('João', 'M', '12345678901', 'joao@example.com', '9999999999', '2001-11-20'),
  ('Maria', 'F', '98765432109', 'maria@example.com', '8888888888', '2001-11-20');