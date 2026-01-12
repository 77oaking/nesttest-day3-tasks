import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students=[
        {id:1, name:'Azman', age:26},
        {id:2, name:'Antora', age:28},
        {id:3, name:'Saima', age:23},
        {id:4, name:'Fateen', age:25},
    ];
    getAllStudents(){
        return this.students;
    }
    getStudentById(id:number){
        const student=this.students.find((s)=>s.id===id)
        if(!student)throw new NotFoundException('Student Not Found!');
        return student;
    }
    //post
    createStudent(data:{name:string; age:number}){
        const newStudent={
            id:Date.now(),
            ...data,
        };
        this.students.push(newStudent);
        return newStudent;
    }
    updateStudent(id:number, data:{name:string;age:number}){
        const index=this.students.findIndex(
            (s)=>s.id===id
        )
        if(index=== -1){
            throw new NotFoundException('Student not found');
        }
        this.students[index]={id, ...data};
        return this.students[index];
    }
    patchStudent(id:number, data:Partial<{name:string;age:number}>){
        const student=this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }
    deleteStudent(id:number){
        const index=this.students.findIndex(
            (s)=>s.id===id
        );
        if(index=== -1){
            throw new NotFoundException('Student not found');
        };
        const deleted=this.students.splice(index,1);
        return {message: 'Student Deleted',student:deleted[0]};

    }

}
