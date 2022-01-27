create table if not exists mood 
(
    id int generated by default as identity,
    mood varchar(20) not null,
    feedback_id int not null,
    primary key(id),
    constraint fk_feedback 
        foreign key(feedback_id) 
        references feedback(id)
);