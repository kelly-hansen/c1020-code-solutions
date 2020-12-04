select "countries"."name" as "Country",
      count("cities".*) as "Number of Cities"
  from "countries"
  join "cities" using ("countryId")
  group by "countries"."countryId";
