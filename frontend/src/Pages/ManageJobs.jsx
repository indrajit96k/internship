import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Edit, Trash2, Plus } from "lucide-react";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { Link, useNavigate } from "react-router-dom";
import JobDetailsModal from "../Components/jobs/JobDetailsModal";

export default function ManageJobs() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [recruiter, setRecruiter] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const jwt = localStorage.getItem("jwt");
    if (!user || !jwt || user.role !== "recruiter") {
      navigate("/p/recruiterauth");
    } else {
      setRecruiter(user);
      loadJobs(user.email);
    }
    // eslint-disable-next-line
  }, []);

  const loadJobs = async (email) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/jobs?posted_by=${encodeURIComponent(email)}`, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error loading jobs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (jobId) => {
    // Only allow valid MongoDB ObjectId (24 hex chars)
    if (!jobId || typeof jobId !== 'string' || jobId.length !== 24) {
      alert("Invalid job ID. Cannot delete.");
      return;
    }
    try {
      const res = await fetch(`/api/jobs/${jobId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (res.ok) {
        setJobs((prev) => prev.filter((job) => job._id !== jobId));
      } else {
        const err = await res.json();
        alert(err.error || "Failed to delete internship/job.");
      }
    } catch (error) {
      alert("Failed to delete internship/job.");
    }
  };

  const handleView = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
  };
  const handleEdit = (job) => {
    if (job._id && job._id.length === 24) {
      navigate(`/p/edit-job/${job._id}`);
    } else {
      alert("Invalid job ID. Cannot edit.");
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">Manage Jobs</h1>
          <Link to="/p/post-jobs">
            <Button className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto flex items-center justify-center">
              <Plus className="w-4 h-4 mr-2" />
              Post New Job
            </Button>
          </Link>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Your Job Postings</CardTitle>
          </CardHeader>
          <CardContent>
            {jobs.length > 0 ? (
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job._id || job.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg gap-4 sm:gap-0"
                  >
                    <div className="w-full sm:w-auto">
                      <h3 className="font-semibold text-gray-900 text-lg">{job.title}</h3>
                      <p className="text-sm text-gray-600">
                        {job.location} • {job.job_type}
                      </p>
                      <Badge
                        className={
                          job.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }
                      >
                        {job.status}
                      </Badge>
                    </div>
                    <div className="flex w-full sm:w-auto gap-2 justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleView(job)}
                        className="flex-1 sm:flex-none"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(job)}
                        className="flex-1 sm:flex-none"
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700 flex-1 sm:flex-none"
                        onClick={() => handleDelete(job._id)}
                        disabled={!job._id || job._id.length !== 24}
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No jobs posted yet</h3>
                <p className="text-gray-500 mb-4">Start by posting your first job to attract candidates</p>
                <Link to="/p/post-jobs">
                  <Button className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto flex items-center justify-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Post Your First Job
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
        {showDetails && <JobDetailsModal job={selectedJob} onClose={() => setShowDetails(false)} />}
      </div>
    </div>
  );
}
