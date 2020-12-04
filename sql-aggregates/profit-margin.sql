with "revenue" as (
  select "films"."title",
        sum("payments"."amount") as "Total Film Revenue"
    from "payments"
    join "rentals" using ("rentalId")
    join "inventory" using ("inventoryId")
    join "films" using ("filmId")
    group by "films"."title"
    order by "Total Film Revenue" desc
),
"cost" as (
  select "films"."title",
        sum("films"."replacementCost") as "Total Replacement Cost"
    from "inventory"
    join "films" using ("filmId")
    group by "films"."title"
    order by "Total Replacement Cost" desc
)
select "title",
      "Total Film Revenue" - "Total Replacement Cost" as "Profit"
  from "cost"
  join "revenue" using ("title")
  order by "Profit" desc
  limit 5;
