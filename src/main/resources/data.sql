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
insert into label (label_text) values ('label3');

insert into note (note_title, note_text, note_importance, note_is_actual, note_group_group_id, created_at) values('note1','notetextsafasdf111 11',1,true,1, CURRENT_TIMESTAMP, );
insert into note (note_title, note_text, note_importance, note_is_actual, note_group_group_id,created_at) values('note2','notetextsafasdf222 22',0,true,2, CURRENT_TIMESTAMP,);


insert into note_labels values(1, 1);
insert into note_labels values(1, 2);
insert into note_labels values(2, 2);
insert into note_labels values(2, 3);