const motorista = [
    { id: 1, nome: "João", idade: 33, cnh: "486759258" },
    { id: 2, nome: "Maria", idade: 25, cnh: "897548629" },
    { id: 3, nome: "Marcos", idade: 41, cnh: "547628614" },
    { id: 4, nome: "Júlia", idade: 30, cnh: "176895423" },
    { id: 5, nome: "Bia", idade: 22, cnh: "457891626" }
]

class MotoristaService {
    async getAllMotor() {
        return motorista;
    }
    async getMotorById(id) {
        const motor = motorista.find(m => m.id === parseInt(id));
        if (!motor) {
            throw new Error("O motorista não foi encontrado!");
        }
        return motor;
    }
    async createMotor() {

    }
}

export const motoristaService = new MotoristaService
