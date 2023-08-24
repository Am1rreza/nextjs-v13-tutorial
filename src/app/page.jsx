"use client";

import Courses from "@/components/Courses";
import { useState, useEffect, Suspense } from "react";
import LoadingPage from "./loading";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const courses = await response.json();

      setCourses(courses);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <>
      <h1>Welcome to Next.js V13</h1>
      <Courses courses={courses} />
    </>
  );
}
