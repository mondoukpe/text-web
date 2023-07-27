import{CiLink}  from "react-icons/ci";

export const Resources = () => {
    return (
        <div>
            <h3 className="font-extrabold text-3xl mb-5"> Resource de le chaine </h3>

            <ul>
               <li className="flex items-center"><CiLink className="mr-3"/><a className="hover:underline" href="https://python.org">Télécharger python</a></li>
               <li className="flex items-center"><CiLink className="mr-3"/><a className="hover:underline" href="https://github">Télécharger parc pygame</a></li>
               <li className="flex items-center"><CiLink className="mr-3"/><a className="hover:underline" href="https://youtube.com">Voir ma derniere video</a></li>
            </ul>
        </div>
    )
}