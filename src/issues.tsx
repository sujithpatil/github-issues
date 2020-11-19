import React from 'react';
import { useGithubIssueComments } from "./api/github-events.api";
import ErrorDetails from "./components/error-details";
import Issue from './issue';

const Test = (props: { user: string; repo: string; }) => {

    const { user, repo } = props;
    const { data, isLoading, isError, error } = useGithubIssueComments(user, repo);

    if (isLoading) {
        return (
            <div>Loading ...</div>
        )
    }

    if (isError) {
        return (
            <ErrorDetails error={error} />
        )
    }

    return <>
        {data?.map((issue: any, index: any) => (
            <Issue key={ index } issue={issue} />
        ))}</>
};

export default Test;