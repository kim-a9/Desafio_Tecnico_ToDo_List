import { CreateTaskUsecase } from "../../src/application/usecases/create.task.usecase";
import { Task } from "../../src/domain/entities/task";
import { TaskStatus } from "../../src/domain/entities/task";
import { TaskPriority } from "../../src/domain/entities/task";

describe("Create Task Unit Test", () => {
    const taskData = {
            id: "12345",
            title: "Task",
            description: "Testar com Jest",
            status: 'pending' as TaskStatus,
            priority: 'medium' as TaskPriority,
            due_date: new Date(),
            created_at: new Date(),
            updated_at: new Date(),
        };

    const mockRepo = {
        create: jest.fn().mockResolvedValue(taskData),
    }

    beforeAll(() => {
        jest.clearAllMocks();
    });

    it("Deve criar nova task com sucesso", async () => {
        const createTask = new CreateTaskUsecase(mockRepo as any);
        const r = await createTask.execute(taskData);

        expect(mockRepo.create).toHaveBeenCalled();
        expect(r).toHaveProperty("title", taskData.title);

    });


})