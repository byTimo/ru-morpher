import {morpher} from "./src";

describe("morpher.toCase", () => {
    describe("months", () => {
        it("январь", () => {
            expect(morpher.toCase("январь", "gen")).toBe("января");
            expect(morpher.toCase("январь", "dat")).toBe("январю");
            expect(morpher.toCase("январь", "acc")).toBe("январь");
            expect(morpher.toCase("январь", "abl")).toBe("январем");
            expect(morpher.toCase("январь", "prep")).toBe("январе");
        });
        it("февраль", () => {
            expect(morpher.toCase("февраль", "gen")).toBe("февраля");
            expect(morpher.toCase("февраль", "dat")).toBe("февралю");
            expect(morpher.toCase("февраль", "acc")).toBe("февраль");
            expect(morpher.toCase("февраль", "abl")).toBe("февралем");
            expect(morpher.toCase("февраль", "prep")).toBe("феврале");
        });
        it("март", () => {
            expect(morpher.toCase("март", "gen")).toBe("марта");
            expect(morpher.toCase("март", "dat")).toBe("марту");
            expect(morpher.toCase("март", "acc")).toBe("март");
            expect(morpher.toCase("март", "abl")).toBe("мартом");
            expect(morpher.toCase("март", "prep")).toBe("марте");
        });
        it("апрель", () => {
            expect(morpher.toCase("апрель", "gen")).toBe("апреля");
            expect(morpher.toCase("апрель", "dat")).toBe("апрелю");
            expect(morpher.toCase("апрель", "acc")).toBe("апрель");
            expect(morpher.toCase("апрель", "abl")).toBe("апрелем");
            expect(morpher.toCase("апрель", "prep")).toBe("апреле");
        });
        it("май", () => {
            expect(morpher.toCase("май", "gen")).toBe("мая");
            expect(morpher.toCase("май", "dat")).toBe("маю");
            expect(morpher.toCase("май", "acc")).toBe("май");
            expect(morpher.toCase("май", "abl")).toBe("маем");
            expect(morpher.toCase("май", "prep")).toBe("мае");
        });
        it("июнь", () => {
            expect(morpher.toCase("июнь", "gen")).toBe("июня");
            expect(morpher.toCase("июнь", "dat")).toBe("июню");
            expect(morpher.toCase("июнь", "acc")).toBe("июнь");
            expect(morpher.toCase("июнь", "abl")).toBe("июнем");
            expect(morpher.toCase("июнь", "prep")).toBe("июне");
        });
        it("июль", () => {
            expect(morpher.toCase("июль", "gen")).toBe("июля");
            expect(morpher.toCase("июль", "dat")).toBe("июлю");
            expect(morpher.toCase("июль", "acc")).toBe("июль");
            expect(morpher.toCase("июль", "abl")).toBe("июлем");
            expect(morpher.toCase("июль", "prep")).toBe("июле");
        });
        it("август", () => {
            expect(morpher.toCase("август", "gen")).toBe("августа");
            expect(morpher.toCase("август", "dat")).toBe("августу");
            expect(morpher.toCase("август", "acc")).toBe("август");
            expect(morpher.toCase("август", "abl")).toBe("августом");
            expect(morpher.toCase("август", "prep")).toBe("августе");
        });
        it("сентябрь", () => {
            expect(morpher.toCase("сентябрь", "gen")).toBe("сентября");
            expect(morpher.toCase("сентябрь", "dat")).toBe("сентябрю");
            expect(morpher.toCase("сентябрь", "acc")).toBe("сентябрь");
            expect(morpher.toCase("сентябрь", "abl")).toBe("сентябрем");
            expect(morpher.toCase("сентябрь", "prep")).toBe("сентябре");
        });
        it("октябрь", () => {
            expect(morpher.toCase("октябрь", "gen")).toBe("октября");
            expect(morpher.toCase("октябрь", "dat")).toBe("октябрю");
            expect(morpher.toCase("октябрь", "acc")).toBe("октябрь");
            expect(morpher.toCase("октябрь", "abl")).toBe("октябрем");
            expect(morpher.toCase("октябрь", "prep")).toBe("октябре");
        });
        it("ноябрь", () => {
            expect(morpher.toCase("ноябрь", "gen")).toBe("ноября");
            expect(morpher.toCase("ноябрь", "dat")).toBe("ноябрю");
            expect(morpher.toCase("ноябрь", "acc")).toBe("ноябрь");
            expect(morpher.toCase("ноябрь", "abl")).toBe("ноябрем");
            expect(morpher.toCase("ноябрь", "prep")).toBe("ноябре");
        });
        it("декабрь", () => {
            expect(morpher.toCase("декабрь", "gen")).toBe("декабря");
            expect(morpher.toCase("декабрь", "dat")).toBe("декабрю");
            expect(morpher.toCase("декабрь", "acc")).toBe("декабрь");
            expect(morpher.toCase("декабрь", "abl")).toBe("декабрем");
            expect(morpher.toCase("декабрь", "prep")).toBe("декабре");
        });
    });

    describe("three character end", () => {
        it("патруль", () => {
            expect(morpher.toCase("патруль", "gen")).toBe("патруля");
            expect(morpher.toCase("патруль", "dat")).toBe("патрулю");
            expect(morpher.toCase("патруль", "acc")).toBe("патруль");
            expect(morpher.toCase("патруль", "abl")).toBe("патрулем");
            expect(morpher.toCase("патруль", "prep")).toBe("патруле");
        });
        it("жолудь", () => {
            expect(morpher.toCase("жолудь", "gen")).toBe("жолудя");
            expect(morpher.toCase("жолудь", "dat")).toBe("жолудю");
            expect(morpher.toCase("жолудь", "acc")).toBe("жолудь");
            expect(morpher.toCase("жолудь", "abl")).toBe("жолудем");
            expect(morpher.toCase("жолудь", "prep")).toBe("жолуде");
        });
    });

    describe("two character end", () => {
        it("чашка", () => {
            expect(morpher.toCase("чашка", "gen")).toBe("чашки");
            expect(morpher.toCase("чашка", "dat")).toBe("чашке");
            expect(morpher.toCase("чашка", "acc")).toBe("чашку");
            expect(morpher.toCase("чашка", "abl")).toBe("чашкой");
            expect(morpher.toCase("чашка", "prep")).toBe("чашке");
        });
        it("пряжа", () => {
            expect(morpher.toCase("пряжа", "gen")).toBe("пряжи");
            expect(morpher.toCase("пряжа", "dat")).toBe("пряже");
            expect(morpher.toCase("пряжа", "acc")).toBe("пряжу");
            expect(morpher.toCase("пряжа", "abl")).toBe("пряжей");
            expect(morpher.toCase("пряжа", "prep")).toBe("пряже");
        });
        it("сережка", () => {
            expect(morpher.toCase("сережка", "gen")).toBe("сережки");
            expect(morpher.toCase("сережка", "dat")).toBe("сережке");
            expect(morpher.toCase("сережка", "acc")).toBe("сережку");
            expect(morpher.toCase("сережка", "abl")).toBe("сережкой");
            expect(morpher.toCase("сережка", "prep")).toBe("сережке");
        });
        it("туча", () => {
            expect(morpher.toCase("туча", "gen")).toBe("тучи");
            expect(morpher.toCase("туча", "dat")).toBe("туче");
            expect(morpher.toCase("туча", "acc")).toBe("тучу");
            expect(morpher.toCase("туча", "abl")).toBe("тучей");
            expect(morpher.toCase("туча", "prep")).toBe("туче");
        });
        it("верный", () => {
            expect(morpher.toCase("верный", "gen")).toBe("верного");
            expect(morpher.toCase("верный", "dat")).toBe("верному");
            expect(morpher.toCase("верный", "acc")).toBe("верного");
            expect(morpher.toCase("верный", "abl")).toBe("верным");
            expect(morpher.toCase("верный", "prep")).toBe("верном");
        });
        it("ночь", () => {
            expect(morpher.toCase("ночь", "gen")).toBe("ночи");
            expect(morpher.toCase("ночь", "dat")).toBe("ночи");
            expect(morpher.toCase("ночь", "acc")).toBe("ночь");
            expect(morpher.toCase("ночь", "abl")).toBe("ночью");
            expect(morpher.toCase("ночь", "prep")).toBe("ночи");
        });
        it("мышь", () => {
            expect(morpher.toCase("мышь", "gen")).toBe("мыши");
            expect(morpher.toCase("мышь", "dat")).toBe("мыши");
            expect(morpher.toCase("мышь", "acc")).toBe("мышь");
            expect(morpher.toCase("мышь", "abl")).toBe("мышью");
            expect(morpher.toCase("мышь", "prep")).toBe("мыши");
        });
        it("тетрадь", () => {
            expect(morpher.toCase("тетрадь", "gen")).toBe("тетради");
            expect(morpher.toCase("тетрадь", "dat")).toBe("тетради");
            expect(morpher.toCase("тетрадь", "acc")).toBe("тетрадь");
            expect(morpher.toCase("тетрадь", "abl")).toBe("тетрадью");
            expect(morpher.toCase("тетрадь", "prep")).toBe("тетради");
        });
        it("суть", () => {
            expect(morpher.toCase("суть", "gen")).toBe("сути");
            expect(morpher.toCase("суть", "dat")).toBe("сути");
            expect(morpher.toCase("суть", "acc")).toBe("суть");
            expect(morpher.toCase("суть", "abl")).toBe("сутью");
            expect(morpher.toCase("суть", "prep")).toBe("сути");
        });
    });

    describe("one character end", () => {
        it("анна", () => {
            expect(morpher.toCase("анна", "gen")).toBe("анны");
            expect(morpher.toCase("анна", "dat")).toBe("анне");
            expect(morpher.toCase("анна", "acc")).toBe("анну");
            expect(morpher.toCase("анна", "abl")).toBe("анной");
            expect(morpher.toCase("анна", "prep")).toBe("анне");
        });
        it("андрей", () => {
            expect(morpher.toCase("андрей", "gen")).toBe("андрея");
            expect(morpher.toCase("андрей", "dat")).toBe("андрею");
            expect(morpher.toCase("андрей", "acc")).toBe("андрея");
            expect(morpher.toCase("андрей", "abl")).toBe("андреем");
            expect(morpher.toCase("андрей", "prep")).toBe("андрее");
        });
        it("окно", () => {
            expect(morpher.toCase("окно", "gen")).toBe("окна");
            expect(morpher.toCase("окно", "dat")).toBe("окну");
            expect(morpher.toCase("окно", "acc")).toBe("окно");
            expect(morpher.toCase("окно", "abl")).toBe("окном");
            expect(morpher.toCase("окно", "prep")).toBe("окне");
        });
        it("ясли", () => {
            expect(morpher.toCase("ясли", "gen")).toBe("яслей");
            expect(morpher.toCase("ясли", "dat")).toBe("яслям");
            expect(morpher.toCase("ясли", "acc")).toBe("ясли");
            expect(morpher.toCase("ясли", "abl")).toBe("яслями");
            expect(morpher.toCase("ясли", "prep")).toBe("яслях");
        });
        it("матрас", () => {
            expect(morpher.toCase("матрас", "gen")).toBe("матраса");
            expect(morpher.toCase("матрас", "dat")).toBe("матрасу");
            expect(morpher.toCase("матрас", "acc")).toBe("матрас");
            expect(morpher.toCase("матрас", "abl")).toBe("матрасом");
            expect(morpher.toCase("матрас", "prep")).toBe("матрасе");
        });
        it("комыш", () => {
            expect(morpher.toCase("комыш", "gen")).toBe("комыша");
            expect(morpher.toCase("комыш", "dat")).toBe("комышу");
            expect(morpher.toCase("комыш", "acc")).toBe("комыш");
            expect(morpher.toCase("комыш", "abl")).toBe("комышом");
            expect(morpher.toCase("комыш", "prep")).toBe("комыше");
        });
        it("бакалея", () => {
            expect(morpher.toCase("бакалея", "gen")).toBe("бакалеи");
            expect(morpher.toCase("бакалея", "dat")).toBe("бакалее");
            expect(morpher.toCase("бакалея", "acc")).toBe("бакалею");
            expect(morpher.toCase("бакалея", "abl")).toBe("бакалеей");
            expect(morpher.toCase("бакалея", "prep")).toBe("бакалее");
        });
    });
});
