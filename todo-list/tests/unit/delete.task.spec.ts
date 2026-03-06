import { Task, TaskPriority, TaskStatus } from "../../src/domain/entities/task";
import { DeleteTaskUsecase } from "../../src/application/usecases/delete.task.usecase";


describe("Delete Task Unit Test", () => {
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
        delete: jest.fn().mockResolvedValue(taskInstance),
    }

    beforeAll(() => {
        jest.clearAllMocks();
    });


    it("Deve deletar a task com ssucesso", async () => {
        const delTask = new DeleteTaskUsecase(mockRepo as any);
        mockRepo.findById.mockResolvedValue({id: "12345"});

        const task = await delTask.execute("12345");

        expect(mockRepo.delete).toHaveBeenCalledWith("12345");
    })
})