// import { Task, TaskPriority, TaskStatus } from "../../src/domain/entities/task";
// import { UpdateTaskUsecase } from "../../src/application/usecases/update.task.usecase";


// describe("Get Task Unit Test", () => {
//     const taskData = {
//         id: "12345",
//         title: "Task",
//         description: "Testar com Jest",
//         status: 'pending' as TaskStatus,
//         priority: 'medium' as TaskPriority,
//         due_date: new Date(),
//         created_at: new Date(),
//         updated_at: new Date(),
//     }; 

//     const taskInstance = new Task(taskData);

//     const mockRepo = {
//         findById: jest.fn().mockResolvedValue(taskInstance),
//         update: jest.fn().mockResolvedValue(taskInstance),
//     }

//     beforeAll(() => {
//         jest.clearAllMocks();
//     });


//     it("Deve atualizar task com sucesso", async () => {
//         const updateTask = new UpdateTaskUsecase(mockRepo as any);
//         const task = await updateTask.execute("12345");


//     })


// });