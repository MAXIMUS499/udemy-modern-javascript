class GitHub {
  constructor() {
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

  async getUser(user) {
    const profileRes = await fetch(`https://api.github.com/users/${user}`);
		
		const reposRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);
		
		const profile = await profileRes.json();
		const repos = await reposRes.json();

    return {
			profile,
			repos
    };
	}
	
}
