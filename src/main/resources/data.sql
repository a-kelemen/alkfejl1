/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  Mad
 * Created: Nov 4, 2018
 */

insert into user (username, password, email_Address, enabled, role) values('user', '$2a$04$pOKctSzDARCWyPeCaJqYp.L.5WiA6I30Hjlus86rLhWhMyU6rWL/y', 'madhh@hotmail.com', true, 'ROLE_USER');
insert into user (username, password, email_Address, enabled, role) values('admin', '$2a$04$S0MkA28ILVSSHxOIZxLCDOU3rQY7zvZwC.LqH0bRYxa48qoDQTqp.', 'blabla@blabla.com', true, 'ROLE_ADMIN');

insert into note_group (note_group_name) values('notegroup1');
insert into note_group (note_group_name) values('notegroup2');

insert into label (label_text) values ('label1');
insert into label (label_text) values ('label2');

insert into note (note_text, note_importance, note_is_actual, note_group_group_id) values('notetextsafasdf111 11',1,true,1);
insert into note (note_text, note_importance, note_is_actual, note_group_group_id) values('notetextsafasdf222 22',0,true,2);
