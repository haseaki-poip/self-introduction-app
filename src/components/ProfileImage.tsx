type PropsType = { img_url: string | undefined; css: string };

const ProfileImage = ({ img_url, css }: PropsType) => {
  return (
    <img
      src={img_url}
      className={
        "w-full h-full object-cover object-center absolute inset-0 " + css
      }
    />
  );
};

export default ProfileImage;
