create table if not exists films (
	i_film serial not null primary key,
	title char(200) not null,
	description char(500),
    original_language char(200),
    director char(200),
	note float,
	cover char(500),
	duration int,
	releaseYear smallint
);


create table if not exists reviews (
	i_review serial not null primary key,
	title char(200) not null,
	analysis char(500) not null,
	note float,
	name char(200),
	img char(500),
	i_film int,
	foreign key(i_film)
		references films(i_film)
);

create table if not exists genres (
	i_genre serial not null primary key,
	name char(200)
)

create table if not exists genre_film (
	i_film int,
	i_genre int,
	foreign key(i_film)
		references films(i_film),
	foreign key(i_genre)
		references genres(i_genre)
)