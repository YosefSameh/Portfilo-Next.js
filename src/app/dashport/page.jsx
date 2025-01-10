"use client";

import { useEffect, useState } from "react";

const Dashboard = () => {
  
  // fetch Projects
  useEffect(() => {
           fetchProjects();
           }, []);
     
         
            
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ Titel: "", Des: "", Img:"",Url:"" });
  const [editProject, setEditProject] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
// fetch Projects
  const fetchProjects = async () => {
    try {
      const response = await fetch(
        `https://portfilo-node-js.vercel.app/api/Projects`
       );
       
       
       const data = await response.json();  
       
       
       setProjects(data.data.projects);
       
     } catch (error) {
      console.error("Error fetching products:", error);
     } 
   };

  // Add Project
  const handleAddProject = async () => {
    if (!newProject.Titel && !newProject.Des && !newProject.Url) return;
    
        try {
          const response = await fetch('https://portfilo-node-js.vercel.app/api/Projects', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProject),
          });
          console.log(newProject);
          
          const data = await response.json();
          console.log(data );
          
           setProjects(data.data.projects);
          fetchProjects()
          console.log(projects);
          
        
        } catch (error) {
          console.error("Error fetching products:", error);
        } 
    

    setNewProject({ Titel: "", Des: "",Url:"", Img:"" });

  };

  // Delete Project
  const confirmDeleteProject = async () => {
    setDeleteModalOpen(false);
    setProjectToDelete(null);
    try {
      
      const response = await fetch(`https://portfilo-node-js.vercel.app/api/Projects/${projectToDelete._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const data = await response.json();
      
      fetchProjects()

      
    
    } catch (error) {
      console.error("Error fetching products:", error);
    } 
    
  };

  const handleDeleteProject = (project) => {
    setProjectToDelete(project);
    setDeleteModalOpen(true);
  };

  // Edit Project
  const handleEditProject = (project) => {
    setEditProject({ ...project });
    setEditModalOpen(true);
  };

  const handleSaveEdit = async () => {
    // setProjects((prevProjects) =>
    //   prevProjects.map((project) =>
    //     project.id === editProject.id ? editProject : project
    //   )
    // );
  const body = {
    "Titel":editProject.Titel,
    "Des":editProject.Des,
    "Img":editProject.Img,
    "Url":editProject.Url,
  }
    try {
      const response = await fetch(`http://localhost:3006/api/Projects/${editProject._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      
      const data = await response.json();
      
      setProjects(data.data.projects);
      fetchProjects()
      
    
    } catch (error) {
      console.error("Error fetching products:", error);
    } 

    setEditModalOpen(false);
    setEditProject(null);
  };

  const handleCancelEdit = () => {
    setEditModalOpen(false);
    setEditProject(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">


      {/* Main Content */}
      <div className="w-100 p-8">
        {/* Projects Table */}
        <div id="projects">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4">Titel</th>
                <th className="py-3 px-4">Des</th>
                <th className="py-3 px-4">Imags</th>
                <th className="py-3 px-4">Url</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0  ?  projects.map((project,index) => (
                <tr key={project._id} className="border-b">
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{project.Titel}</td>
                  <td className="py-3 px-4">{project.Des}</td> 
                  <td className="py-3 px-4">{project.Img}</td> 
                  <td className="py-3 px-4">{project.Url}</td> 
                  <td className="py-3 px-4 space-x-2">
                    <button
                      onClick={() => handleEditProject(project)}
                      className="bg-blue-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project)}
                      className="bg-red-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )): null}
            </tbody>
          </table>
        </div>

        {/* Add Project Form */}
        <div id="add-project" className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Add New Project</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddProject();
            }}
            className="bg-white shadow-md rounded-lg p-6"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Titel</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded"
                value={newProject.Titel}
                onChange={(e) =>
                  setNewProject({ ...newProject, Titel: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Imgs</label>
              <input
                type="text"
                rows="3"
                className="w-full px-4 py-2 border rounded"
                value={newProject.Img}
                onChange={(e) =>
                  setNewProject({ ...newProject, Img: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Url</label>
              <input
                type="text"
                rows="3"
                className="w-full px-4 py-2 border rounded"
                value={newProject.Url}
                onChange={(e) =>
                  setNewProject({ ...newProject, Url: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Des
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded"
                rows="3"
                value={newProject.Des}
                onChange={(e) =>
                  setNewProject({ ...newProject, Des: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded transition-transform transform hover:scale-105"
            >
              Add Project
            </button>
          </form>
        </div>

        {/* Edit Modal */}
        {editModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h3 className="text-2xl font-bold mb-4">Edit Project</h3>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Titel</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded"
                  value={editProject.Titel}
                  onChange={(e) =>
                    setEditProject({ ...editProject, Titel: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Url</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded"
                  value={editProject.Url}
                  onChange={(e) =>
                    setEditProject({ ...editProject, Url: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Img</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded"
                  value={editProject.Img}
                  onChange={(e) =>
                    setEditProject({ ...editProject, Img: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Des
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded"
                  rows="3"
                  value={editProject.Des}
                  onChange={(e) =>
                    setEditProject({
                      ...editProject,
                      Des: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleCancelEdit}
                  className="bg-red-500 text-white px-6 py-2 rounded transition-transform transform hover:scale-105"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="bg-green-500 text-white px-6 py-2 rounded transition-transform transform hover:scale-105"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h3 className="text-2xl font-bold mb-4">Confirm Deletion</h3>
              <p className="mb-6">Are you sure you want to delete "{projectToDelete?.Titel}"?</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setDeleteModalOpen(false)}
                  className="bg-gray-500 text-white px-6 py-2 rounded transition-transform transform hover:scale-105"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDeleteProject}
                  className="bg-red-500 text-white px-6 py-2 rounded transition-transform transform hover:scale-105"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
