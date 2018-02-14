class GitHub {
  constructor() {}

  async getUser(user) {
    const profileRes = await fetch(`https://api.github.com/users/${user}`);
    const profile = await profileRes.json();

    return {
      profile
    };
  }
}
