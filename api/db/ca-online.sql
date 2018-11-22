create database caonline;
use caonline;

create table registros(  
    id int primary key AUTO_INCREMENT,
    name varchar(255),
    email varchar(255) unique,
    password varchar(255),
    cpf varchar(255),
    nivel_acesso int default 0,
    data_nascimento date,
    id_cidade int,
    id_estado int,
    api_token varchar(255),
    remember_token varchar(255),
    created_at  date,
    updated_at  date

);
create table aplicadores(
    id int primary key AUTO_INCREMENT,
    id_posto int, 
 	id_registro int unique,
    endereco varchar(255),
    foreign key(id_registro) references  registros(id),
    foreign key(id_posto) references  postos(id)

);


create table postos(
    id int PRIMARY KEY AUTO_INCREMENT,
    id_cidade int,
    id_estado int,
    endereco varchar(255)

);

create table vacinas(
    id int PRIMARY KEY AUTO_INCREMENT,
  	lote int,
    tipo int,
    name varchar(255) default 'sem nome',
    data_de_validade date,
    created_at  date,
    updated_at  date
);

create table historicos(
    id int,
    id_vacina int,
 	id_registro int,
    id_aplicador int,
    created_at  date,
    updated_at  date,


    foreign key(id_registro) references  registros(id),  
    foreign key(id_aplicador) references aplicadores(id),
    foreign key(id_vacina) references vacinas(id)
);