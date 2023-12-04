// Logout post request
document
  .getElementById("logOutBtn")
  ?.addEventListener("click", handleLogoutBtnClick);

// function to handle logout btn click
async function handleLogoutBtnClick() {
  const option = {
    method: "POST",
  };

  try {
    const response = await fetch("/api/v1/auth/logout", option);
    if (response.ok && response.status === 200) {
      location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}

const empType = document.getElementById("empType");
if (empType) {
  empType.value = empType?.getAttribute("value");
}

// createIssue page cancel button
// function cancelForm() {
//   document.getElementById("createIssue").reset();
// }
