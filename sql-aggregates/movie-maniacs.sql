select "firstName",
      "lastName",
      sum("payments"."amount") as "Total Payments"
  from "payments"
  join "customers" using ("customerId")
  group by "firstName",
          "lastName"
  order by "Total Payments" desc;
