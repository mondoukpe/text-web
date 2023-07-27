import{ FaYoutube, FaTwitter, FaDiscord } from "react-icons/fa";

export const SocialLink = () => {
  return (
    <section className="mt-5">
      <h3 className=" text-2xl font-extrabold"> Mes réseaux sociaux </h3>
      <ul className="mt-3">
        <li className="flex items-center"> <FaYoutube className="mr-3"/><a className="hover:text-[#2929a1]" href="https://youtube.com/user/gravenilvectutos">Youtube</a></li>
        <li className="flex items-center"> <FaTwitter className="mr-3"/><a className="hover:text-[#2929a1]" href="https://twitter.com/gravenilvec">Twitter</a></li>
        <li className="flex items-center"> <FaDiscord className="mr-3"/><a className="hover:text-[#2929a1]" href="https://discord.gg/graven">Discord</a></li>
      </ul>
    </section>
  );
};
