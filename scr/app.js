import express from "express";

const app = express();

const users = [
  { id: "1", name: "Franco",city: "Londres"},
  { id: "2", name: "Francisco",city: "Londres"},
  { id: "3", name: "Marla",city: "Buenos Aires"},
];

app.get("/users" , (req, res)=> {
   const { city } =req.query;

   if(city){
      res.send(users.filter((u) => u.city == city));

   }else{
   res.send(users);
   } 
});

app.get("/users/:id",(req,res) =>{
  // Endpoint combinaciones entre rutas y metodos y servidor tendra una respuesta
  const {id} = req.params;
  res.send("Cliente pidio id = ${id}");
});

app.get("/usuario",(req,res) =>{
    // Endpoint combinaciones entre rutas y metodos y servidor tendra una respuesta
    res.json({
        fistName:"Ale",
        lastName:"Suarez",
        age:29,
        email:"ale@gmail.com"
    });
  });

app.listen(8080, () => {
   console.log("Server listening on port 8080")
});

