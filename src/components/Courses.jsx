import Link from "next/link";

async function fetchCourses() {
  const response = await fetch("http://localhost:3000/api/courses");
  const courses = await response.json();
  return courses;
}

export default async function Courses() {
  const courses = await fetchCourses();

  return (
    <div className="courses">
      {courses.map((course) => {
        return (
          <div className="card" key={course.id}>
            <h2>{course.title}</h2>
            <small>Level: {course.level}</small>
            <p>{course.description}</p>
            <Link href={course.link} target="_blank" className="btn">
              Go To Course
            </Link>
          </div>
        );
      })}
    </div>
  );
}
