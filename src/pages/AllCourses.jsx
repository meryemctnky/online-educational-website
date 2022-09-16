import React, {useEffect, useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import CourseCard from '../components/UI/CourseCard'
import {getCourseService} from "../services/courses"


const AllCourses = () => {

  const [courses, setCourses] = useState([]);

  const getCourseList = async () => {
    const response = await getCourseService();
    setCourses(response.data);
  }

  useEffect(()=>{
    getCourseList();
  },[])

  return (
    <Container>
      <h2>All Courses</h2>
      <Row className=''>
        { courses && courses.map((item, i) => (
          <CourseCard key={i} item={item}/>
        ))}
      </Row>
    </Container>

  )
}

export default AllCourses
