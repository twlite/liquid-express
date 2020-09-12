# Liquid Express
Better Liquid template engine for express.

# Installation
## Install Express

```sh
npm install express

```

## Install Liquid

```sh
npm install liquid

```

## Install Liquid Express

```sh
npm install liquid-express

```

# Example
## server.js

```js
const express = require("express"); // import express
const app = require("liquid-express")(express()); // this method injects liquid view engine to your app

app.get("/", (req, res) => {
    res.render("index", { // render index.liquid
        name: "Snowflake"
    });
});

app.listen(3000, () => console.log("Server started!"));

```

## views/index.liquid

```html
<!DOCTYPE html>
<html>
<head>
    <title>Liquid Express</title>
</head>
<body>
    <h1>Hello, My name is {{name}}!</h1>
</body>
</html>

```

# Join my discord
**[https://discord.gg/2SUybzb](https://discord.gg/2SUybzb)**