import { useEffect, useState } from "react";
import LoadingSpinner from "../Components/common/LoadingSpinner";
import JobCard from "../Components/jobs/JobCard";
import Chatbot from "../Components/Chatbot";

export default function StudentDashboard() {
  const [internships, setInternships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");

  useEffect(() => {
    // Get student name from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setStudentName(user.full_name || user.name || "Student");
      } catch (e) {
        setStudentName("Student");
      }
    }
    loadInternships();
    const jwt = localStorage.getItem("jwt");
    if (!jwt) return;
    fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/api/user/profile`, {
      method: "GET",
      headers: { Authorization: `Bearer ${jwt}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) setProfile(data.user);
        else setError("Failed to load profile");
      })
      .catch(() => setError("Failed to load profile"));
  }, []);

  const loadInternships = async () => {
    try {
      const response = await fetch("https://app.base44.com/api/apps/687508e8c02e10285e949016/entities/Job", {
        headers: {
          api_key: "fc6a61ef692346c9b3d1d0749378bd8e",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const internshipJobs = data.filter((job) => job.job_type === "Internship");
      setInternships(internshipJobs);
    } catch (error) {
      console.error("Error loading internships:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <div className="min-h-screen bg-white font-sans">
        {/* Main Section */}
        <div className="flex flex-col">
          <main className="p-6">
            <div className="bg-blue-100 border-l-4 border-blue-400 shadow p-6 rounded-xl mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome, Username! 👋</h2>
              <p className="text-gray-600 text-sm">
                Explore the latest internships and build your career with confidence
              </p>
            </div>

              {/* Featured Opportunities */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">Featured Opportunities</h3>
                <div className="space-y-4 max-w-4xl w-full mx-auto px-2">
                  {internships.slice(0, 6).map((internship) => (
                    <JobCard key={internship.id} job={internship} />
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
        {/* Chatbot */}
        <Chatbot />
    </>
  );
}
