import Story from "./Story";

export default function Newsfeed() {
  const story = {
    title: "Placeholder Story",
    summary: "Placeholder data, to be replaced with data fetched via GraphQL",
    poster: {
      name: "Placeholder Person",
      profilePicture: {
        url: "/static/assets/cat_avatar.png",
      },
    },
    thumbnail: {
      url: "/static/assets/placeholder.jpeg",
    },
  };

  return (
    <div className="newsfeed">
      <Story story={story} />
    </div>
  );
}
