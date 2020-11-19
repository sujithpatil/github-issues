import { GithubComment, GithubEvent, GithubIssue, GithubUser } from "./github-events.model";
import axios from "axios";
import { useQuery } from "react-query";

export function useGithubIssueComments(user: string, topic: string) {

    const url = `/networks/${user}/${topic}/events?per_page=100`

    return useQuery<GithubIssue[], Error>(url, () =>
        axios.get(url).then((res) => {
            return mapResult(res.data);
        })
    )
}

export function mapResult(data: GithubEvent[]): GithubIssue[] {

    const filteredResponse = data.filter((item: GithubEvent) => item.type === 'IssueCommentEvent');

    let issues: GithubIssue[] = [];

    for (let issue of filteredResponse) {

        let comments: GithubComment[] = [];

        let user: GithubUser = {
            id: issue.payload.issue.user.id,
            login: issue.payload.issue.user.login
        };

        let commentUser: GithubUser = {
            id: issue.payload.comment.user.id,
            login: issue.payload.comment.user.login
        };

        let comment: GithubComment = {
            id: issue.payload.comment.id,
            created_at: issue.payload.comment.created_at,
            user: commentUser,
            body: issue.payload.comment.body
        };

        comments.push(comment);

        let obj: GithubIssue = {
            id: issue.payload.issue.id,
            created_at: issue.payload.issue.created_at,
            user,
            title: issue.payload.issue.title,
            body: issue.payload.issue.body,
            comments,
        };

        const existingIssue: GithubIssue[] = issues.filter(e => e.id === issue.payload.issue.id);


        if ( existingIssue.length === 0 || issues.length === 0 ) {
            issues.push(obj);
        } else {
            existingIssue[0].comments.push(comment);
        }

    }

    return issues;



}
