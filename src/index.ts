import { App } from "./App"

new App().server.listen(8080, () => {
  console.log("listening on port 8080")
});