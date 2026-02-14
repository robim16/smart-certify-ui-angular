import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../../services/courses';
import { TechFilter } from "../tech-filter/tech-filter";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, FormsModule, TechFilter],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = []
  onlyAvailableTest = false

  technologySelected: string=''

  techData = [
    { name: 'Angular', image: '../../../assets/technologies/angular.svg' },
    { name: 'React', image: '../../../assets/technologies/react.svg' },
    { name: 'Azure', image: '../../../assets/technologies/azure.svg' },
    {
      name: '.Net Core',
      image: '../../../assets/technologies/dotnet-core.svg',
    },
    {
      name: 'Javascript',
      image: '../../../assets/technologies/javascript.svg',
    },
    { name: 'Java', image: '../../../assets/technologies/java.svg' },
    { name: 'SQL', image: '../../../assets/technologies/sql.svg' },
    {
      name: 'React Native',
      image: '../../../assets/technologies/react-native.svg',
    },
    { name: 'AWS', image: '../../../assets/technologies/aws.svg' },
    { name: 'Docker', image: '../../../assets/technologies/docker.svg' },
  ]; // List of technologies with names and images

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses
    })
  }

  onTechSelected(tech: string): void {
    this.technologySelected = tech
    this.applyFilters()
  }

  applyFilters() {
    let filtered = this.courses.filter((course) => 
      course.title
        .toLowerCase()
        .startsWith(this.technologySelected.toLocaleLowerCase())
    )

    if (this.onlyAvailableTest) {
      filtered = filtered.filter(course => course.questionsAvailable)
    }

    this.filteredCourses = filtered
  }
}
