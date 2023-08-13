create sequence "Bike_id_seq"
    as integer;

create table if not exists Bike
(
    id              integer default nextval('avarts."Bike_id_seq"'::regclass) not null
        constraint bike_pk
            primary key,
    brand           varchar(30)                                               not null,
    type            varchar(30)                                               not null,
    weight          numeric                                                   not null,
    shifting_system varchar(30)                                               not null,
    wheels          varchar(30)
);

alter sequence "Bike_id_seq" owned by bike.id;

create table if not exists User
(
    id            serial
        constraint user_pk
            primary key,
    firstname     varchar(30) not null,
    lastname      varchar(30) not null,
    birth_date    date        not null,
    password      varchar(30) not null,
    country       varchar(30),
    city          varchar(30),
    type_of_rider varchar(30) not null,
    bike          integer
        constraint user_bike__fk
            references bike
            on update cascade on delete cascade
);

create unique index if not exists user_id_uindex
    on "user" (id);

create unique index if not exists bike_id_uindex
    on bike (id);

create table if not exists Training
(
    id            serial
        constraint training_pk
            primary key,
    date          date    not null,
    km            numeric not null,
    avg_heartrate integer not null,
    avg_speed     numeric not null,
    bike          integer
        constraint training_bike__fk
            references bike
            on update cascade on delete cascade,
    "user"        integer
        constraint training_user_fk
            references "user"
            on update cascade on delete cascade,
    likes         integer
);

create unique index if not exists training_id_uindex
    on training (id);

create table if not exists Friends
(
    user1 integer not null
        constraint friends_pk
            primary key
        constraint friends__user1_fk
            references "user"
            on update restrict on delete restrict,
    user2 integer not null
        constraint friends__user2_fk
            references "user"
            on update restrict on delete restrict
);

create table if not exists TrainingComment
(
    id       serial
        constraint comment_pk
            primary key,
    text     varchar(50) default 'test'::character varying not null,
    date     date        default date(now())               not null,
    training integer
        constraint comment__training_fk
            references training
            on update cascade on delete cascade,
    "user"   integer
        constraint comment__user_fk
            references "user"
            on update cascade on delete cascade
);

create unique index if not exists comment_id_uindex
    on comment (id);

create table if not exists Races
(
    id           serial
        constraint races_pk
            primary key,
    date         date        default date(now()),
    type         varchar(30) default 'road'::character varying not null,
    km           numeric                                       not null,
    age_category varchar(30)                                   not null,
    city         varchar(30),
    country      varchar(30),
    street       varchar(30),
    number       integer
);

create unique index if not exists races_id_uindex
    on races (id);

