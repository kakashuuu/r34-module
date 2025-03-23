const { real_random } = require("r34-module")

async function r() {
    try {
        const data = await real_random();
        if (!Array.isArray(data)) {
            console.log("Unexpected response:", data);
            return;
        }
        console.log(data.length);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
r();
