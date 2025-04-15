create database RegisterPerson;
use RegisterPerson;

create table person(
id int auto_increment primary key not null,
namess varchar(50),
surnames varchar(100),
date_nac date,
direction varchar(200),
marital_status varchar(40),
nationality varchar(40),
sex varchar(19),
isChildren boolean
);