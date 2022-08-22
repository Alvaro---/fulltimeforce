export const getBranches = async (user, repo) => {
    const url = `/commits?githubUser=${user}&repo=${repo}`;
    let commits = []
    try {
        const resp = await fetch(url);
        const res = await resp.json();
        commits = res.map((item) => ({
            id: item.sha,
            message: item.commit.message,
            url: item.commit.url,
        }));
    } catch (error) {
        console.log(error)
    }
    return commits;
}
