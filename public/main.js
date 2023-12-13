// Logout post request
// 1st method
const LogoutLink = document.getElementById("logoutLink");
const DeleteProjectButtons = document.querySelectorAll(".delete-project");

if (LogoutLink) {
  LogoutLink.addEventListener("click", handleLogoutBtnClick);
}

// logout btn click handler
async function handleLogoutBtnClick() {
  const options = {
    method: "POST",
  };

  try {
    const response = await fetch("/api/v1/auth/logout", options);
    if (response.ok && response.status === 200) {
      location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}

// add lister to delete project
if (DeleteProjectButtons.length > 0) {
  DeleteProjectButtons.forEach((projectDeleteBtn) => {
    // get project id from element
    const projectId = projectDeleteBtn.getAttribute("project-id");

    projectDeleteBtn.addEventListener("click", () =>
      handleDeleteProject(projectId)
    );
  });
}

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
