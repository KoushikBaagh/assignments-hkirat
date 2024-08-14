const fs = require("fs").promises;

async function readFileAndPerformExpensiveOperation(filePath) {
  try {
    // Reading the file contents
    const data = await fs.readFile(filePath, "utf8");
    console.log("File Contents:", data);
    // Performing an expensive operation
    console.log("Starting expensive operation...");
    let sum = 0;
    for (let i = 0; i < 1e50; i++) {
      sum += i;
    }
    console.log("Expensive operation completed. Sum:", sum);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

// Replace 'example.txt' with the path to your file
readFileAndPerformExpensiveOperation("C:/VSCode/cohort 3.0/example.txt");
