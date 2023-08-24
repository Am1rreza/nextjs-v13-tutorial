"use client";

import Courses from "@/components/Courses";
import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import CourseSearch from "@/components/CourseSearch";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSearchResults = (courses) => {
    setCourses(courses);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const courses = await response.json();

      setCourses(courses);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  return (
    <>
      <div style={{ margin: "0 1rem" }}>
        <h1>Welcome to Next.js V13</h1>
        <CourseSearch getSearchResults={getSearchResults} />
      </div>
      {loading ? <LoadingPage /> : <Courses courses={courses} />}
    </>
  );
}
