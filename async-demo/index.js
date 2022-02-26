const getUsers = (id) => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve({ name: 'Sergio', id: id })
    }, 2000)
  });
}

const getRepositories = (user) => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      console.log(`Reading repositories for the user ${user.name}}`)
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000)
  })
}

console.log('Before');
const displayRepos = async () => {
  try {
    const user = await getUsers(1);
    console.log(user);
    const repos = await getRepositories(user);
    console.log(repos);
  } catch(err) {
    console.log(err);
  }
}

displayRepos()
console.log('After');


