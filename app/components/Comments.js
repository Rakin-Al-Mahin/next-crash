import React from "react";

export default async function Comments({ promise }) {
  const comments = await promise;

  return (
    <div className="mt-10">
      <h1>Comments</h1>
      <ul>
        {comments.map((comments) => (
          <li className="mb-3" key="{comments.id}">
            {comments.name} <br /> {comments.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
