import React, { useState } from 'react';
import * as s from "./app.styles";

const Issue = (props: { issue: any; }) => {

    const [showComments, setShowComments] = useState(false);

    const setStatus = () => {
        setShowComments(!showComments);
    }

    const { issue } = props;

    return <s.issue_container key={issue.id}>
        <s.issuer_title>{issue.title}</s.issuer_title>
        <s.author>By <s.author_name>{issue.user.login}</s.author_name></s.author>
        <s.comment_container>
            <s.issue_body dangerouslySetInnerHTML={{ __html: issue.body }} ></s.issue_body>
            <s.comment_button
            style={{
                bottom: ( showComments ? '-50px' : '-25px' )
            }}
             onClick={() => setStatus()} >
                {showComments ? 'Collapse Issue' : `${issue.comments.length} Comment(s) - Expand Issue`}
            </s.comment_button>
            { showComments && <div style={{ marginTop: '25px', height: (showComments ? 'auto' : '0') }}>
                <s.comment_heading>{issue.comments.length} Comment(s)</s.comment_heading>
                {issue.comments.map((comment: { id: string | number | null | undefined; created_at: React.ReactNode; user: { login: React.ReactNode; }; body: React.ReactNode; }) =>

                    <s.comment_body key={comment.id}>
                        <div className='comment'>{comment.created_at} {comment.user.login}:</div>
                        <div>{comment.body}</div>
                    </s.comment_body>

                )}
            </div>
}
        </s.comment_container>
    </s.issue_container>
};

export default Issue;