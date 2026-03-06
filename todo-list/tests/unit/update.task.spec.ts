import { Task, TaskPriority, TaskStatus } from "../../src/domain/entities/task";
import { UpdateTaskUsecase } from "../../src/application/usecases/update.task.usecase";


describe("Get Task Unit Test", () => {
    const taskData = {
        id: "12345",
        title: "Task",
        description: "Tarefa antiga",
        status: 'pending' as TaskStatus,
        priority: 'low' as TaskPriority,
        due_date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
    }; 

    const taskInstance = new Task(taskData);

    const mockRepo = {
        findById: jest.fn(),
        update: jest.fn().mockResolvedValue(null),
    }

    beforeAll(() => {
        jest.clearAllMocks();
    });


    it("Deve atualizar task com sucesso", async () => {
        const updateTask = new UpdateTaskUsecase(mockRepo as any);
        mockRepo.update.mockResolvedValue(taskInstance);

        const newData = { "title": "Task Atualizada"};
        const task = await updateTask.execute("12345", newData);

        expect(mockRepo.update).toHaveBeenCalled();
        expect(task.title).toBe("Task Atualizada");

    })

    it("Não deve atualizar task se estiver completed", async () => {
        const updateTask = new UpdateTaskUsecase(mockRepo as any);
        const completedTask = new Task({ ...taskData, status: "completed" } as any);
        mockRepo.findById.mockResolvedValue(completedTask);

        await expect(updateTask.execute("123", { title: "Novo Titulo" }))
            .rejects
            .toThrow("Tarefas completadas não podem ser editadas.");
    });
    

    



});