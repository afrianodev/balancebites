export default function Footer() {
    const dateYear = new Date().getFullYear();

    return(
        <div className="bg-darkBlue w-[100vw] h-16 mt-16 flex justify-center items-center bg-opacity-85 gap-12 text-base">
            <p className="text-white">Copyright © {dateYear}</p>
            <p className="text-white">By <a href='https://github.com/afrianodev' target="blank" className="cursor-pointer">AfrianoDev</a></p>
        </div>
    )
}