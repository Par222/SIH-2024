import GoogleTranslate from "./GoogleTranslate"
const NavBar=()=>{
    return(
        <>
        <div className="bg-yellow-400 py-4 flex justify-between
         px-4">
            <h1 className="font-extrabold text-white text-3xl">Shiksha</h1>
            <GoogleTranslate></GoogleTranslate>
        </div>
        </>
    )
}
export default NavBar