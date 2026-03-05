import { Task, TaskPriority, TaskStatus } from "../../src/domain/entities/task";
import { GetTaskByIdUsecase, GetTasksUseCase } from "../../src/application/usecases/get.task";


describe("Get Task Unit Test", () => {
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

    const taskInstance = new Task(taskData);

    const mockRepo = {
        create: jest.fn(),
        findById: jest.fn().mockResolvedValue(taskInstance),
        findAll: jest.fn().mockRejectedValue(taskInstance),

    }

    beforeAll(() => {
        jest.clearAllMocks();
    });


    it("Deve buscar task pelo id com sucesso", async () => {
        const getTaskId = new GetTaskByIdUsecase(mockRepo as any);
        const task = await getTaskId.execute("12345");

        expect(mockRepo.findById).toHaveBeenCalledWith("12345");
        expect(task).toHaveProperty("id", "12345");
        expect(task).toHaveProperty("title", "Task");


    })


    it("Deve retornar erro ao não encontrar task", async () => {
        mockRepo.findById.mockResolvedValue(null);
        const getTaskId = new GetTaskByIdUsecase(mockRepo as any);


        await expect(getTaskId.execute("999")).rejects.toThrow("Não foi possível encontrar a Task");

    });

    it("Deve buscar todas as tasks com sucesso", async () => {
        const taskData2 ={
        id: "6789", 
        title: "Task example",
        description: "Testar com Jest",
        status: 'pending' as TaskStatus,
        priority: 'medium' as TaskPriority,
        due_date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
        };

        const taskInstance = new Task(taskData2)
        mockRepo.findAll.mockResolvedValue([taskInstance]);

        const allTasks = new GetTasksUseCase(mockRepo as any);
        const tasks = await allTasks.execute({});

        expect(tasks).toBeInstanceOf(Array);
        expect(mockRepo.findAll).toHaveBeenCalledWith({});
    });

    it("Deve filtrar busca por status", async () => {
        mockRepo.findAll.mockResolvedValue([taskInstance]);
        const taskStatus = new GetTasksUseCase(mockRepo as any);
        const tasks = await taskStatus.execute({ status: 'pending'});

        expect(mockRepo.findAll).toHaveBeenCalledWith({ status: 'pending'});

    })

    it("Deve filtrar busca por prioridade", async () => {
        mockRepo.findAll.mockResolvedValue([taskInstance]);
        const taskPriority = new GetTasksUseCase(mockRepo as any);
        const tasks = await taskPriority.execute({ priority: 'high'});

        expect(mockRepo.findAll).toHaveBeenCalledWith({ priority: 'high'});

    })



});