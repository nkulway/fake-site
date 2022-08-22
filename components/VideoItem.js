import Image from "next/image";
import Link from "next/link";
import videoStyles from "../styles/Video.module.css";

const VideoItem = ({ video }) => {
  let url = video.url;
  let src = video.thumbnail_large;

  let rawDescription = video.description;
  let newDescription = rawDescription.replace(/<[^>]*>?/gm, "");

  return (
    <div className={videoStyles.card}>
      <div className={videoStyles.item}>
        <h1>{video.title}</h1>
        <p>{newDescription}</p>
      </div>
      <div className={videoStyles.item}>
        <div className={videoStyles.gradientFilter}>
          <Link className={videoStyles.link} href={url}>
            <div className={videoStyles.gradientBackground} />
          </Link>
          <Image
            loader={() => src}
            src={src}
            alt='video thumbnail'
            width={500}
            height={300}
            className={videoStyles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
