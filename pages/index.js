import Head from "next/head";
import VideoList from "../components/VideoList";

export default function Home({ videos }) {
  return (
    <div>
      <Head>
        <title>The Best Fake Site</title>
      </Head>
      <VideoList videos={videos} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://vimeo.com/api/v2/channel/staffpicks/videos.json`
  );
  const videos = await res.json();
  return {
    props: {
      videos,
    },
  };
};
