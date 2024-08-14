const fs = require("fs").promises;

async function writeFile(filePath, data) {
  try {
    await fs.writeFile(filePath, data, "utf8");
    console.log("Data written to file successfully.");
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}

// Replace 'output.txt' with the path to your file and 'Hello, World!' with the data you want to write
writeFile("example.txt", "Hello, World!");
