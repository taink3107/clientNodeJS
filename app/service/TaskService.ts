import {Person} from "../domain/Person";
import {PersonRespository} from "../repo/PersonRespository";
import {Task} from "../domain/Task";
import {TaskRespon} from "../repo/TaskRespon";

export class TaskService {
    private taskRespon: TaskRespon = new TaskRespon();

    save(task: Task) {
        return this.taskRespon.save(task);
    }
}