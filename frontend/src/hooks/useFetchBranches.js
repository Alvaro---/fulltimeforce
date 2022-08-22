import { useEffect } from "react"
import { useState } from "react"
import { getBranches } from "../apis/getBranches"

export const useFetchBranches = (user, rama) => {

    const [commits, setCommits] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getBranchUser = async () => {
        const commits = await getBranches(user, rama);
        setCommits(commits)
        setIsLoading(false)
    }

    useEffect(() => {
        getBranchUser()
    }, [])


    return {
        commits,
        isLoading,
    }
}
