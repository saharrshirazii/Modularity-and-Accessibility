const {gte,showMessage, shoppingList, getUser, login} = require("./../code");

//test for Numbers
describe("gte", ()=>{
it("if a is greater than b, should return true", ()=>{
    const result = gte (10,5);
    expect(result).toBe(true);
});

it("if a is equal b, should return true", ()=>{
    const result = gte (10,10);
    expect(result).toBe(true);
});

it("if a is less than b, should return false", ()=>{
    const result = gte (5,20);
    expect(result).toBe(false);
});

})

//test for String
describe("showMessage", ()=>{
it("if to contain the name should return true", ()=>{
    const result = showMessage ("Mohammad");
    expect(result).toContain("Mohammad");
});
})

//test for Array
describe("shoppingList", ()=>{
it ("should pass if contain milk", ()=>{
const result = shoppingList();
expect(result).toContain("milk");
});
})

//test for Object
describe("getUser", ()=>{
    it("should return user properly", ()=>{
        const result = getUser();
        expect(result).toHaveProperty('id',123);
    });
})

//test for throw error
describe("login", ()=>{
    it("should throw an error if password is wrong.", ()=>{
        expect(()=>{login('345')}).toThrow();

    });
    it("should return jwt if password is not wrong.", ()=>{
        const result = login('1234');
        expect(result).toHaveProperty('jwt');
    });
})