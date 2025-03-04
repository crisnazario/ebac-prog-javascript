-- Exercício 1

-- Faça uma consulta que retorne a lista de filmes e suas categorias correspondentes.
SELECT
    film.film_id as id_filme,
    film.title as titulo,
    film.description as descricao,
    c.name as categoria
from
    film
    inner JOIN film_category on film.film_id = film_category.film_id
    inner JOIN category as c on film_category.category_id = c.category_id

-- Faça uma consulta que retorne a lista de todos os atores com o número filmes que cada ator participou. Ordene a lista pelo numero de filmes, iniciando pelos atores que mais atuaram.
select COUNT(film_actor.actor_id) as quantidadeFilmes, CONCAT(
        actor.first_name, ' ', actor.last_name
    ) as ator
from actor
    inner join film_actor on actor.actor_id = film_actor.actor_id
GROUP BY (actor.actor_id)
order by quantidadeFilmes desc

-- Faça uma consulta que retorne a lista de atores que atuaram em filmes com mais de duas horas de duração (120min). Ordene a lista pelo numero de filmes que cada ator participou
select COUNT(film_actor.actor_id) as quantidadeFilmes, CONCAT(
        actor.first_name, ' ', actor.last_name
    ) as ator
from actor
    inner join film_actor on actor.actor_id = film_actor.actor_id
    inner join film on film_actor.film_id = film.film_id
where
    film.length > 120
GROUP BY (actor.actor_id)
order by quantidadeFilmes desc

-- Exercicio 2

-- 1)
select COUNT(*)
from (
        SELECT film.film_id, film.title, film.description, category.name
        from
            film
            inner JOIN film_category on film.film_id = film_category.film_id
            inner JOIN category on film_category.category_id = category.category_id
    ) as listaFilmes


-- 2)
select COUNT(*)
from (
        select        
        COUNT(film_actor.actor_id) as quantidadeFilmes, CONCAT(
                actor.first_name, ' ', actor.last_name
            ) as ator
        from actor
            inner join film_actor on actor.actor_id = film_actor.actor_id
        GROUP BY (actor.actor_id)
        order by quantidadeFilmes desc
    ) as quantidadeFilmesPorAtor


--3)
select COUNT(*) from 
(select COUNT(film_actor.actor_id) as quantidadeFilmes
from actor
    inner join film_actor on actor.actor_id = film_actor.actor_id
    inner join film on film_actor.film_id = film.film_id
where
    film.length > 120
GROUP BY (actor.actor_id)
order by quantidadeFilmes desc) as total
