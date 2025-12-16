const {
	sanitizeInput,
	average,
	getUserName,
	sortByDate
} = require("./utils");

test("Exempel", () => {
	expect(sanitizeInput("test")).toBe("test");
})

