rs.initiate(
   {
      _id: "rs-shard-01",
      version: 1,
      members: [
         { _id: 0, host : "shard-a:27017" },
         { _id: 1, host : "shard-b:27017" }
      ]
   }
)
