const formatProperty = require("./formatProperty");

const propertyFromMongoose = {
        _id: "61480db44ab0cf7175467756",
        askingPrice: "$946446.87",
        description: "Combining contemporary comforts with a functional layout",
        address: "8237 Moland Hill",
        title: "Rare Moland Hill Stunner",
        img: "https://placeimg.com/644/484/arch"
    };

describe("formatProperty", () => {
    it("should change _id to id", () => {
        const expected = {
                id: "61480db44ab0cf7175467756",
                askingPrice: "$946446.87",
                description: "Combining contemporary comforts with a functional layout",
                address: "8237 Moland Hill",
                title: "Rare Moland Hill Stunner",
                img: "https://placeimg.com/644/484/arch"
        };
        const received = formatProperty(propertyFromMongoose);
        expect(received).toEqual(expected);
    });
});