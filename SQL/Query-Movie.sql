use  movie_booking;
select m.* from movie m 
join kind_of_film k  on k.id = kind_of_movie_id
where k.name  like '%horno%'
;


select m.* from movie m 
join status_film s on s.id = m.status_movie_id 
join kind_of_film k on k.id = m.kind_of_movie_id 
where is_delete = false 
and m.name_movie like "%"
and m.director like "%" 
and s.name like "%" 
and m.actor like "Tom holland" 
and m.release_date like "%"