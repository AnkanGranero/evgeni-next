export const Overlay = ({views, close}) => {

    return (
    <div onClick={close} className="h-[100vh] w-[100vw] z-11 flex justify-center items-center left-0 absolute">
    <div className="h-[100vh] absolute w-[100vw] bg-black z-11 opacity-80"></div>
        <ul>
            {views.map((view, index)  => (
                <li key={index}>
                    <a href={view.link} className="text-white z-12">{view.name}</a>
                </li>
            ))}
        </ul>
    </div>
    )
}