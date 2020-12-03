delete from "films"
where "rating" <> 'G'
returning "filmId", "title";
