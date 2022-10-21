const request = require ("supertest")
const { describe } = require("yargs")
const app = require ("../app")
//ee
describe("Realizando meu teste API", () =>{
    it ("Soma de dois numeros",async()=>{
        const res =await request(app).get("/somar")
        .send({
            "1num": 8,
            "2num": 7
        })
            expect(res.statusCode).toEqual(200) 
            expect(res.body).toEqual({"soma":15})
    }),
    it ("Subtração de dois numeros",async()=>{
        const res =await request(app).get("/subtrair")
        .send({
            "1num": 8,
            "2num": 7
        })
            expect(res.statusCode).toEqual(200) 
            expect(res.body).toEqual({"subtracao":1})
    }),
    it ("Multiplicação de dois numeros",async()=>{
        const res =await request(app).get("/multiplicar")
        .send({
            "1num": 8,
            "2num": 7
        })
            expect(res.statusCode).toEqual(200) 
            expect(res.body).toEqual({"multiplicar":56})
    }),
    it ("Divisão de dois numeros",async()=>{
        const res =await request(app).get("/dividir")
        .send({
            "1num": 10,
            "2num": 2
        })
            expect(res.statusCode).toEqual(200) 
            expect(res.body).toEqual({"divisao":5})
    })
})