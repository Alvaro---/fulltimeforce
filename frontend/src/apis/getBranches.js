export const getBranches = async (user, repo) => {
    const url = `/commits?githubUser=${user}&repo=${repo}`;
    let commits = []
    try {
        const resp = await fetch(url);
        const res = await resp.json();
        console.log(res)
        commits = res.map((item) => ({
            id: item.sha,
            message: item.commit.message,
            url: item.html_url,
        }));
    } catch (error) {
        console.log(error)
    }
    return commits;
}
