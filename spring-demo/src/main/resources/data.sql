insert into APP_USER(ID, PASSWORD, USERNAME) values(1, '$2a$10$bnC26zz//2cavYoSCrlHdecWF8tkGfPodlHcYwlACBBwJvcEf0p2G', 'subbu');
insert into APP_USER(ID, PASSWORD, USERNAME) values(2, '$2a$10$bnC26zz//2cavYoSCrlHdecWF8tkGfPodlHcYwlACBBwJvcEf0p2G', 'balraj');

insert into USER_ROLE(APP_USER_ID, ROLE) values(1, 'POWER_ADMIN');
insert into USER_ROLE(APP_USER_ID, ROLE) values(2, 'USER');