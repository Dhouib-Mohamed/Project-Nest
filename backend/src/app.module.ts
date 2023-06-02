import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ClassroomModule} from './classroom/classroom.module';
import {PracticeModule} from './practice/practice.module';
import {CourseModule} from './course/course.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import * as dotenv from "dotenv";
import {Teacher} from "./teacher/entities/teacher.entity";
import {Student} from "./student/entities/student.entity";
import {Course} from "./course/entities/course.entity";
import {Practice} from "./practice/entities/practice.entity";
import {Classroom} from "./classroom/entities/classroom.entity";
import {TaskModule} from './task/task.module';
import {UserModule} from "./authentification/user.module";
import {TeacherModule} from "./teacher/teacher.module";
import {ResponseTaskModule} from './response_task/response_task.module';
import {ResponseAssignmentModule} from './response_assignment/response_assignment.module';
import {ResponseTask} from "./response_task/entities/response_task.entity";
import {ResponseAssignment} from "./response_assignment/entities/response_assignment.entity";


dotenv.config();

@Module({
    imports: [ClassroomModule, CourseModule, PracticeModule, UserModule, TaskModule, TeacherModule, ResponseTaskModule , ResponseAssignmentModule ,
        TypeOrmModule.forRoot({
            type: "mysql",
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
               // synchronize: true,
            autoLoadEntities : true ,
            entities: [Teacher, Student, Course, Classroom, Practice, ResponseTask , ResponseAssignment]
        })
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
