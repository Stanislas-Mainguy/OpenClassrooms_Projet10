import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            const date = new Date("2022-01-01")
            const month = getMonth(date);
            expect(month).toBe("janvier");
        });
        it("the function return février for 2022-02-02 as date", () => {
            const date = new Date("2022-02-02");
            const month = getMonth(date);
            expect(month).toBe("février")
        });
        it("the function return mars for 2022-03-03 as date", () => {
            const date = new Date("2022-03-03");
            const month = getMonth(date);
            expect(month).toBe("mars")
        });
        it("the function return avril for 2022-04-04 as date", () => {
            const date = new Date("2022-04-04");
            const month = getMonth(date);
            expect(month).toBe("avril")
        });
        it("the function return mai for 2022-05-05 as date", () => {
            const date = new Date("2022-05-05");
            const month = getMonth(date);
            expect(month).toBe("mai")
        });
        it("the function return juin for 2022-06-06 as date", () => {
            const date = new Date("2022-06-06");
            const month = getMonth(date);
            expect(month).toBe("juin")
        });
        it("the function return juillet for 2022-07-07 as date", () => {
            const date = new Date("2022-07-07");
            const month = getMonth(date);
            expect(month).toBe("juillet")
        });
        it("the function return aout for 2022-08-08 as date", () => {
            const date = new Date("2022-08-08");
            const month = getMonth(date);
            expect(month).toBe("août")
        });
        it("the function return septembre for 2022-09-09 as date", () => {
            const date = new Date("2022-09-09");
            const month = getMonth(date);
            expect(month).toBe("septembre")
        });
        it("the function return octobre for 2022-10-10 as date", () => {
            const date = new Date("2022-10-10");
            const month = getMonth(date);
            expect(month).toBe("octobre")
        });
        it("the function return novembre for 2022-11-11 as date", () => {
            const date = new Date("2022-11-11");
            const month = getMonth(date);
            expect(month).toBe("novembre")
        });
        it("the function return décembre for 2022-12-12 as date", () => {
            const date = new Date("2022-12-12");
            const month = getMonth(date);
            expect(month).toBe("décembre")
        });
    });
})