// Logout post request
// 1st method
const LogoutLink = document.getElementById("logoutLink");

const DeleteProjectButtons = document.querySelectorAll(".delete-project");

const DeleteIssueBtn = document.querySelectorAll(".delete-issue");

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
  const isConfirm = confirm("Are you sure you want to delete this project");

  if (!isConfirm) return;

  const options = {
    method: "DELETE",
  };

  try {
    const response = await fetch(`/api/v1/projects/${projectId}`, options);
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

// issue
if (DeleteIssueBtn.length > 0) {
  DeleteIssueBtn.forEach((issueDeleteBtn) => {
    // get project id from element
    const issueId = issueDeleteBtn.getAttribute("issue-id");

    issueDeleteBtn.addEventListener("click", () => handleDeleteIssue(issueId));
  });
}

//handle delete issue
async function handleDeleteIssue(issueId) {
  const isConfirm = confirm("Are you sure you want to delete this issue");

  if (!isConfirm) return;

  const options = {
    method: "DELETE",
  };

  try {
    const response = await fetch(`/api/v1/issues/${issueId}`, options);
    if (response.status === 401) {
      alert("You are not allowed to do this operation");
    }
    if (response.status === 200) {
      // location.href = "/api/v1/issues/";
      location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}
