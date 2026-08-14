import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

const FILE = "./cart.json";

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const saveCart = async (mycart) => {
  await writeFile(FILE, JSON.stringify(mycart, null, 2));
};


const addToCart = async (product) => {
    const mycart = await getCart();
    const isfound = mycart.find((item) => item.id === product.id);
    if(isfound){
        isfound.qty += product.qty;
    } else {
        mycart.push(product);
    }
    await saveCart(mycart);
    console.log(`product updated/added with id ${product.id} into cart`);
};
const showCart = async () => {
  const data = await getCart();
  console.table(data);
};

const main = async () => {
  let choice;

  const cin = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  do {
    console.log("\nWelcome to Flipkart 🛍️");
    console.log("1........Show cart");
    console.log("2........Add to cart");
    console.log("3........Remove Product");
    console.log("4........Update Product");
    console.log("5........Exit");

    choice = await cin.question("Enter your choice: ");

    switch (Number(choice)) {
      case 1:
        await showCart();
        break;

      case 2:
        let data= await cin.question("Enter id,anem,price,qty:");
        const [id,name,price,qty] =
        data.split(',').map((item) => item.trim());


        const product = {
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        };
        await addToCart(product);
        break;

      case 3:
        console.log("Remove Product");
        break;

      case 4:
        console.log("Update Product Quality");
        break;

      case 5:
        console.log("See you later");
        break;

      default:
        console.log("Invalid Choice! Try again 😒");
    }
  } while (Number(choice) !== 5);

  cin.close();
};

main();
