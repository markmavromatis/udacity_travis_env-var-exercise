
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log("ENV variable PRINT_THIS = " + process.env.PRINT_THIS)
    await sleep(5000);
  }
}

main();
