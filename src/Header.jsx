
function Header(){
    return(
        <>
        <div className="main_header">
            <img className="netflixLogo" src="https://image.flaticon.com/icons/png/128/732/732228.png" width="95px" alt="netflix logo"/>
            <h1 className="netflix_logo">Netflix</h1>
            <form>
            <input type="text" placeholder="Search a movie" className="search_box"/>
            </form>
        </div>
        </>
    )

}
export default Header