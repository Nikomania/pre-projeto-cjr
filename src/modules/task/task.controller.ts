import { Body, Controller, Post } from '@nestjs/common';
import { TaskService, taskResponses } from './task.service';
import { TaskDTO } from './task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Tasks routes')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({ status: 200, description: taskResponses[200] })
  @ApiResponse({ status: 409, description: taskResponses[409] })
  @ApiResponse({ status: 404, description: taskResponses[404] })
  @ApiResponse({ status: 400, description: taskResponses[400] })
  @Post()
  async create(@Body() data: TaskDTO) {
    return this.taskService.create(data);
  }
}
