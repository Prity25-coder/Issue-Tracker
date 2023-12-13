// Logout post request
// document
//   .getElementById("logOutBtn")
//   ?.addEventListener("click", handleLogoutBtnClick);

// function to handle logout btn click
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      try {
        const options = {
          method: "POST",
        };

        const response = await fetch("/api/v1/auth/logout", options);

        if (response.ok && response.status === 200) {
          location.reload();
        } else {
          console.error("Logout failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error during logout:", error);
      }
    });
  }
});

// old function to handle logout btn click
// async function handleLogoutBtnClick() {
//   const options = {
//     method: "POST",
//   };

//   try {
//     const response = await fetch("/api/v1/auth/logout", options);
//     if (response.ok && response.status === 200) {
//       location.reload();
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

const empType = document.getElementById("empType");
if (empType) {
  empType.value = empType?.getAttribute("value");
}

// add lister to delete project
document.addEventListener("DOMContentLoaded", () => {
  const deleteProject = document.querySelectorAll(".delete-project");

  deleteProject.forEach((projectId) => {
    projectId.addEventListener("click", () => {
      const project = projectId.getAttribute("data-project-id");
      handleDeleteProject(project);
    });
  });
});

// delete project function
async function handleDeleteProject(projectId) {
  // console.log(projectId);
  const isConfirm = confirm("Are you sure you want to delete this project");

  if (!isConfirm) return;

  const options = {
    method: "DELETE",
  };

  try {
    const response = await fetch(`/api/v1/projects/${projectId}`, options);
    console.log(response);
    if (response.status === 401) {
      alert("You are not allowed to do this operation");
    }
    if (response.status === 200) {
      location.href = "/api/v1/projects/";
      // location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}

// createIssue page cancel button
// function cancelForm() {
//   document.getElementById("createIssue").reset();
// }
