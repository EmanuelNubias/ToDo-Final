const request = require ("supertest")
const app = require ("../app")

describe("Realizando meu teste API", () =>{
    it ("Soma de dois numeros",async()=>{
        const res =await request(app).get("/somar")
        .send({
            "valorUm": 8,
            "valorDois": 7
        })
            expect(res.statusCode).toEqual(200) 
            expect(res.body).toEqual({"soma":15})
    }),
    it ("Subtração de dois numeros",async()=>{
        const res =await request(app).get("/subtrair")
        .send({
            "valorUm": 8,
            "valorDois": 7
        })
            expect(res.statusCode).toEqual(200) 
            expect(res.body).toEqual({"subtracao":1})
    }),
    it ("Multiplicação de dois numeros",async()=>{
        const res =await request(app).get("/multiplicar")
        .send({
            "valorUm": 8,
            "valorDois": 7
        })
            expect(res.statusCode).toEqual(200) 
            expect(res.body).toEqual({"multiplicar":56})
    }),
    it ("Divisão de dois numeros",async()=>{
        const res =await request(app).get("/dividir")
        .send({
            "valorUm": 10,
            "valorDois": 2
        })
            expect(res.statusCode).toEqual(200) 
            expect(res.body).toEqual({"divisao":5})
    })
})