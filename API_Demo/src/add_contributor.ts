import { LokaliseApi } from "@lokalise/node-api";

async function main() {
  const lokaliseApi = new LokaliseApi({ apiKey: ''});
  const projects = await lokaliseApi.projects().list();
  console.log(projects.items[0].name);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  });