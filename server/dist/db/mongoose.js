const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Successfully running.");
}).catch((e) => {
    console.log("Ran into error: ", e.message);
});
//# sourceMappingURL=mongoose.js.map