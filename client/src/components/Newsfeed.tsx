import { useLazyLoadQuery } from "react-relay";
import Story from "./Story";

import { graphql } from "relay-runtime";
import type { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    topStories {
      ...StoryFragment
      id
    }
  }
`;

export default function Newsfeed() {
  const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});
  const stories = data.topStories;

  return (
    <div className="newsfeed">
      {stories.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
}
